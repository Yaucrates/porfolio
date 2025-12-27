// graphing.ts
/**
 * TODO:
 * 1. Make "drawFunctionGraph" more efficient and nicer. I know for sure there are redudant computations with the interpolation.
 * 2. Ambiguous case may be being handled wrong. Idc
 * 3. I think coloring the background is being handled wrong. That's the reason for the small errors you see with it. Idc.
 */

import { Application, Container, Graphics } from "pixi.js";
import type { Vector2D, Vector3D } from "./math";

type AxisPosition = "center"
    | "left" | "right" | "top" | "bottom"
    | "top-left" | "top-right" | "bottom-left" | "bottom-right";

type Sides = "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
type SidesEnum = 0 | 1 | 2 | 3;

interface GraphOptions {
    axisPosition?: AxisPosition,
    smoothness?: number,
    blocks?: number,
}

type Function1D = (x: number) => number
type Function2D = {
    contourFunction: (x: number, y: number) => number,
    isovalue: number
}

export class GraphController {
    // Graph Elements
    GRAPH_ELEMENT: HTMLDivElement;
    APP: Application | null = null;
    CONTAINER: Container | null = null;
    GRAPHED_FUNCTION = new Graphics();
    GRAPHED_POINTS = new Graphics();
    GRID_GRAPHICS = new Graphics();
    AXES_GRAPHICS = new Graphics();

    // Graph Properties
    ISOVALUE: number;
    SMOOTHNESS: number;
    BLOCK_COUNT: number;
    SUBBLOCK_GRID_COUNT: number;

    BLOCK_SIZE!: number;
    SUBBLOCK_SIZE!: number;
    GRID_SIZE!: number;

    AXIS_POSITION: AxisPosition;
    GRAPH_ORIGIN_COORDINATES!: Vector2D;
    FUNCTION_STARTING_COORDINATES!: Vector2D;
    COORDINATE_GRID: Vector3D[][] = [];

    // Optimization Caches
    // Flattened arrays for interpolation values to avoid duplicate calculation
    // interpX stores x-coordinates of intersections on horizontal edges
    // interpY stores y-coordinates of intersections on vertical edges
    private _interpX: Float32Array = new Float32Array(0);
    private _interpY: Float32Array = new Float32Array(0);

    // Responsive properties
    private resizeObserver: ResizeObserver | null = null;
    private currentFunction: Function1D | Function2D | null = null;
    private currentColorGrid = false;
    private plotted_points: Array<{ point: Vector2D, color: number, radius: number }> = [];

    // Idc to explain this. Have fun figuring out what it means when you change the code!!
    SIDES: Record<Sides, SidesEnum> = {
        TOP: 0,
        RIGHT: 1,
        BOTTOM: 2,
        LEFT: 3,
    }

    // Standard Marching Squares lookup table
    // Note: We do not modify this array at runtime to ensure stability.
    gridCases: number[][][] = [
        [], // 0000
        [[this.SIDES.BOTTOM, this.SIDES.LEFT]], // 0001
        [[this.SIDES.BOTTOM, this.SIDES.RIGHT]], // 0010
        [[this.SIDES.LEFT, this.SIDES.RIGHT]], // 0011
        [[this.SIDES.TOP, this.SIDES.RIGHT]], // 0100
        [[this.SIDES.TOP, this.SIDES.LEFT], [this.SIDES.BOTTOM, this.SIDES.RIGHT]], // 0101 (Ambiguous)
        [[this.SIDES.TOP, this.SIDES.BOTTOM]], // 0110
        [[this.SIDES.TOP, this.SIDES.LEFT]], // 0111
        [[this.SIDES.TOP, this.SIDES.LEFT]], // 1000
        [[this.SIDES.TOP, this.SIDES.BOTTOM]], // 1001
        [[this.SIDES.TOP, this.SIDES.RIGHT], [this.SIDES.BOTTOM, this.SIDES.LEFT]], // 1010 (Ambiguous)
        [[this.SIDES.TOP, this.SIDES.RIGHT]], // 1011
        [[this.SIDES.LEFT, this.SIDES.RIGHT]], // 1100
        [[this.SIDES.BOTTOM, this.SIDES.RIGHT]], // 1101
        [[this.SIDES.BOTTOM, this.SIDES.LEFT]], // 1110
        [], // 1111
    ];

    constructor(graph: HTMLDivElement, options: GraphOptions) {
        this.GRAPH_ELEMENT = graph;
        this.AXIS_POSITION = options.axisPosition ?? "center";

        // Initialize Variables
        this.ISOVALUE = 0;
        this.SMOOTHNESS = options.smoothness ?? 10;
        this.BLOCK_COUNT = options.blocks ?? 12;
        this.SUBBLOCK_GRID_COUNT = this.BLOCK_COUNT * this.SMOOTHNESS;

        this.calculateDimensions();
        this.calculateCoordinates();
    }

    private calculateDimensions() {
        const containerSize = Math.min(this.GRAPH_ELEMENT.clientWidth, this.GRAPH_ELEMENT.clientHeight);
        this.BLOCK_SIZE = Math.ceil(containerSize / (this.BLOCK_COUNT - 1));
        this.GRID_SIZE = this.BLOCK_COUNT * this.BLOCK_SIZE;
        this.SUBBLOCK_SIZE = this.BLOCK_SIZE / this.SMOOTHNESS;

        // Resize optimization caches
        // Horizontal edges: (Rows + 1) * Cols
        this._interpX = new Float32Array((this.SUBBLOCK_GRID_COUNT + 1) * this.SUBBLOCK_GRID_COUNT);
        // Vertical edges: Rows * (Cols + 1)
        this._interpY = new Float32Array(this.SUBBLOCK_GRID_COUNT * (this.SUBBLOCK_GRID_COUNT + 1));
    }

    private calculateCoordinates() {
        const start = 1;
        const center = this.BLOCK_COUNT / 2;
        const end = this.BLOCK_COUNT - 1;

        this.FUNCTION_STARTING_COORDINATES = {
            x: -(this.AXIS_POSITION.includes("left") ? start
                : this.AXIS_POSITION.includes("right") ? end
                : center),
            y: this.AXIS_POSITION.includes("top") ? start
                : this.AXIS_POSITION.includes("bottom") ? end
                : center,
        }

        this.GRAPH_ORIGIN_COORDINATES = {
            x: this.AXIS_POSITION.includes("left") ? start * this.BLOCK_SIZE
                : this.AXIS_POSITION.includes("right") ? end * this.BLOCK_SIZE
                : center * this.BLOCK_SIZE,
            y: this.AXIS_POSITION.includes("top") ? start * this.BLOCK_SIZE
                : this.AXIS_POSITION.includes("bottom") ? end * this.BLOCK_SIZE
                : center * this.BLOCK_SIZE,
        };
    }

    // Projects self.COORDINATE_GRID points (i, j) to their corresponding place on the graph
    private projectGridToGraph(point: Vector2D): Vector2D {
        return {
            x: point.x * this.SUBBLOCK_SIZE,
            y: point.y * this.SUBBLOCK_SIZE,
        }
    }

    private projectFunctionToGrid(point: Vector2D): Vector2D {
        return {
            x: Math.round((point.x - this.FUNCTION_STARTING_COORDINATES.x) * this.SMOOTHNESS),
            y: Math.round((this.FUNCTION_STARTING_COORDINATES.y - point.y) * this.SMOOTHNESS),
        }
    }

    private projectGridToFunction(point: Vector2D): Vector2D {
        return {
            x: this.FUNCTION_STARTING_COORDINATES.x + point.x / this.SMOOTHNESS,
            y: this.FUNCTION_STARTING_COORDINATES.y - point.y / this.SMOOTHNESS
        }
    }

    private projectFunctionToGraph(point: Vector2D) {
        return this.projectGridToGraph(this.projectFunctionToGrid(point));
    }

    private setupResizeObserver() {
        this.resizeObserver = new ResizeObserver(() => {
            this.handleResize();
        });
        this.resizeObserver.observe(this.GRAPH_ELEMENT);
    }

    private handleResize() {
        if (!this.APP || !this.CONTAINER) return;

        // Recalculate dimensions
        this.calculateDimensions();
        this.calculateCoordinates();

        // Resize the app to square dimensions
        const containerSize = Math.min(this.GRAPH_ELEMENT.clientWidth, this.GRAPH_ELEMENT.clientHeight);
        this.APP.renderer.resize(containerSize, containerSize);

        // Rebuild all graphics
        this.rebuildAllGraphics();

        // Re-center the container
        this.CONTAINER.pivot.set(this.GRID_SIZE / 2, this.GRID_SIZE / 2);
        this.CONTAINER.position.set(this.APP.screen.width / 2, this.APP.screen.height / 2);
    }

    private rebuildAllGraphics() {
        // Clear existing graphics
        this.GRID_GRAPHICS.clear();
        this.AXES_GRAPHICS.clear();
        this.GRAPHED_FUNCTION.clear();
        this.GRAPHED_POINTS.clear();

        // Rebuild grid and axes
        this.buildGrid();
        this.buildAxes();

        // Rebuild coordinate grid
        this.buildCoordinateGrid();

        // Redraw function if one exists
        if (this.currentFunction) {
            this.drawFunctionGraph(this.currentFunction, this.currentColorGrid);
        }

        // Redraw all plotted points
        this.plotted_points.forEach(({ point, color, radius }) => {
            const graphPoint = this.projectFunctionToGraph(point);
            this.GRAPHED_POINTS.circle(graphPoint.x, graphPoint.y, radius).fill(color);
        });
    }

    async init() {
        // Initialize Application with square dimensions
        this.APP = new Application();
        const containerSize = Math.min(this.GRAPH_ELEMENT.clientWidth, this.GRAPH_ELEMENT.clientHeight);
        await this.APP.init({
            backgroundAlpha: 1,
            antialias: true,
            width: containerSize,
            height: containerSize,
            eventMode: 'passive',
            eventFeatures: {
                move: false,
                globalMove: false,
                click: false,
                wheel: false
            }
        });
        this.GRAPH_ELEMENT.appendChild(this.APP.canvas);
        this.APP.canvas.style.touchAction = 'pan-y';

        // Build Graph
        this.CONTAINER = new Container();
        this.APP.stage.addChild(this.CONTAINER);

        this.buildGrid();
        this.buildAxes();
        this.buildCoordinateGrid();

        this.CONTAINER.addChild(this.GRID_GRAPHICS);
        this.CONTAINER.addChild(this.AXES_GRAPHICS);
        this.CONTAINER.addChild(this.GRAPHED_FUNCTION);
        this.CONTAINER.addChild(this.GRAPHED_POINTS);

        this.CONTAINER.pivot.set(this.GRID_SIZE / 2, this.GRID_SIZE / 2);
        this.CONTAINER.position.set(this.APP.screen.width / 2, this.APP.screen.height / 2);

        // Setup resize observer
        this.setupResizeObserver();
    }

    private buildGrid() {
        for (let i = 0; i <= this.BLOCK_COUNT; i++) {
            this.GRID_GRAPHICS
                .moveTo(i * this.BLOCK_SIZE, 0)
                .lineTo(i * this.BLOCK_SIZE, this.GRID_SIZE);

            this.GRID_GRAPHICS
                .moveTo(0, i * this.BLOCK_SIZE)
                .lineTo(this.GRID_SIZE, i * this.BLOCK_SIZE);
        }

        this.GRID_GRAPHICS.stroke({ color: 0x666666, pixelLine: true, width: 1 });
    };

    private buildAxes() {
        this.AXES_GRAPHICS
            .moveTo(-this.GRID_SIZE, this.GRAPH_ORIGIN_COORDINATES.y)
            .lineTo(this.GRID_SIZE, this.GRAPH_ORIGIN_COORDINATES.y);

        this.AXES_GRAPHICS
            .moveTo(this.GRAPH_ORIGIN_COORDINATES.x, -this.GRID_SIZE)
            .lineTo(this.GRAPH_ORIGIN_COORDINATES.x, this.GRID_SIZE);

        this.AXES_GRAPHICS.stroke({ color: 0x4c4c4c, width: 6 });
    };

    private buildCoordinateGrid() {
        // Reset coordinate grid
        this.COORDINATE_GRID = [];

        // Compute Values for Coordinate Grid to Avoid Redundant Computation
        for (let j = 0; j <= this.SUBBLOCK_GRID_COUNT; j++) {
            let row: Vector3D[] = [];
            for (let i = 0; i <= this.SUBBLOCK_GRID_COUNT; i++) {
                const gridPoint = {
                    x: i,
                    y: j,
                };

                const functionPoint = this.projectGridToFunction(gridPoint);

                row.push({
                    x: functionPoint.x,
                    y: functionPoint.y,
                    z: 0,
                });
            }
            this.COORDINATE_GRID.push(row);
        }
    }

    drawFunctionGraph(f: Function1D | Function2D, colorGrid = false) {
        // Store current function for redraws
        this.currentFunction = f;
        this.currentColorGrid = colorGrid;

        const func = (typeof f === 'function')
            ? (x: number, y: number) => y - f(x)
            : (x: number, y: number) => f.contourFunction(x, y) - f.isovalue;

        this.GRAPHED_FUNCTION.clear();

        const gridCount = this.SUBBLOCK_GRID_COUNT;
        const subSize = this.SUBBLOCK_SIZE;
        const iso = this.ISOVALUE;
        const grid = this.COORDINATE_GRID;

        // 1. Update Z values
        // This is unavoidable as the function may change, but we use existing objects.
        for (let j = 0; j <= gridCount; j++) {
            const row = grid[j];
            for (let i = 0; i <= gridCount; i++) {
                const p = row[i];
                p.z = func(p.x, p.y);
            }
        }

        // 2. Pre-Calculate Interpolations to avoid doing it 4 times per cell
        // A single edge is shared by two cells. We calculate it once.
        
        // Horizontal Intersections (Edges where x varies)
        // Stored in _interpX. Index [j * gridCount + i] (Row j, Edge i)
        for (let j = 0; j <= gridCount; j++) {
            const row = grid[j];
            const offset = j * gridCount;
            for (let i = 0; i < gridCount; i++) {
                const z0 = row[i].z;
                const z1 = row[i + 1].z;
                // If one is above and one is below iso, we have an intersection
                // Simple optimization: only calc if sign differs relative to iso
                if ((z0 > iso) !== (z1 > iso)) {
                    const ratio = Math.abs((iso - z0) / (z1 - z0));
                    // Store the actual graph X coordinate
                    this._interpX[offset + i] = (i + ratio) * subSize;
                }
            }
        }

        // Vertical Intersections (Edges where y varies)
        // Stored in _interpY. Index [j * (gridCount + 1) + i]
        for (let j = 0; j < gridCount; j++) {
            const rowTop = grid[j];
            const rowBot = grid[j + 1];
            const offset = j * (gridCount + 1);
            for (let i = 0; i <= gridCount; i++) {
                const z0 = rowTop[i].z;
                const z1 = rowBot[i].z;
                if ((z0 > iso) !== (z1 > iso)) {
                    const ratio = Math.abs((iso - z0) / (z1 - z0));
                    // Store the actual graph Y coordinate
                    this._interpY[offset + i] = (j + ratio) * subSize;
                }
            }
        }

        const interpX = this._interpX;
        const interpY = this._interpY;
        const widthX = gridCount; // Width of _interpX row
        const widthY = gridCount + 1; // Width of _interpY row

        // 3. Marching Squares Loop
        for (let j = 0; j < gridCount; j++) {
            const rowTop = grid[j];
            const rowBot = grid[j + 1];

            // Cache row offsets for interpolation arrays
            const rowX_Top = j * widthX;
            const rowX_Bot = (j + 1) * widthX;
            const rowY = j * widthY;
            
            // Cache Y coordinates for the grid cells (for rect drawing)
            const graphY = j * subSize;

            for (let i = 0; i < gridCount; i++) {
                // Check case
                let caseIndex = 0;
                if (rowTop[i].z > iso) caseIndex |= 0b1000;
                if (rowTop[i + 1].z > iso) caseIndex |= 0b0100;
                if (rowBot[i + 1].z > iso) caseIndex |= 0b0010;
                if (rowBot[i].z > iso) caseIndex |= 0b0001;

                // Handle Background & Ambiguous Case Check
                // We only calculate the center if we need to color the background OR if we hit an ambiguous case.
                const isAmbiguous = (caseIndex === 5 || caseIndex === 10);
                
                if (colorGrid || isAmbiguous) {
                    const centerP_TL = rowTop[i];
                    const centerP_BR = rowBot[i + 1];
                    const centerX = (centerP_TL.x + centerP_BR.x) / 2;
                    const centerY = (centerP_TL.y + centerP_BR.y) / 2;
                    
                    const centerVal = func(centerX, centerY);
                    const centerIsInside = centerVal > iso;

                    // Draw filled rectangle
                    if (colorGrid) {
                        const color = centerIsInside ? 0xFF4040 : 0x5EA3FF;
                        this.GRAPHED_FUNCTION
                            .rect(i * subSize, graphY, subSize, subSize)
                            .fill({ color, alpha: 0.5 });
                    }

                    // Ambiguous case modification
                    // We modify the look-up index locally, not the global table.
                    if (isAmbiguous && centerIsInside) {
                        // Original logic was swapping indices. 
                        // Case 5 default: [[TOP, LEFT], [BOTTOM, RIGHT]]
                        // Swapped: [[TOP, RIGHT], [BOTTOM, LEFT]]
                        // Case 10 default: [[TOP, RIGHT], [BOTTOM, LEFT]]
                        // Swapped: [[TOP, LEFT], [BOTTOM, RIGHT]]
                        
                        // Effectively, if center is inside, we want the "connected" look across the center.
                        // We handle this by manually drawing the swapped lines to avoid mutating global state.
                        
                        const topX = interpX[rowX_Top + i];
                        const botX = interpX[rowX_Bot + i];
                        const leftY = interpY[rowY + i];
                        const rightY = interpY[rowY + i + 1];
                        
                        // Top Y is j * subSize, Right X is (i+1) * subSize, etc.
                        const topY = graphY;
                        const botY = graphY + subSize;
                        const leftX = i * subSize;
                        const rightX = (i + 1) * subSize;

                        if (caseIndex === 5) {
                            // Draw Top-Right and Bottom-Left
                             this.GRAPHED_FUNCTION.moveTo(topX, topY).lineTo(rightX, rightY);
                             this.GRAPHED_FUNCTION.moveTo(botX, botY).lineTo(leftX, leftY);
                        } else { // 10
                            // Draw Top-Left and Bottom-Right
                             this.GRAPHED_FUNCTION.moveTo(topX, topY).lineTo(leftX, leftY);
                             this.GRAPHED_FUNCTION.moveTo(botX, botY).lineTo(rightX, rightY);
                        }
                        continue; // Skip standard processing
                    }
                }
                
                if (caseIndex === 0 || caseIndex === 15) continue;

                const gridCase = this.gridCases[caseIndex];

                // Retrieve interpolated coordinates from cache
                // SIDES: TOP=0, RIGHT=1, BOTTOM=2, LEFT=3
                // Top: interpX[rowTop + i], Y = j
                // Right: interpY[rowY + i + 1], X = i+1
                // Bottom: interpX[rowBot + i], Y = j+1
                // Left: interpY[rowY + i], X = i

                for (let k = 0; k < gridCase.length; k++) {
                    const edge1 = gridCase[k][0];
                    const edge2 = gridCase[k][1];

                    let x1, y1, x2, y2;

                    // Resolve Edge 1
                    switch(edge1) {
                        case 0: // TOP
                            x1 = interpX[rowX_Top + i]; y1 = graphY; break;
                        case 1: // RIGHT
                            x1 = (i + 1) * subSize; y1 = interpY[rowY + i + 1]; break;
                        case 2: // BOTTOM
                            x1 = interpX[rowX_Bot + i]; y1 = graphY + subSize; break;
                        default: // LEFT
                            x1 = i * subSize; y1 = interpY[rowY + i]; break;
                    }

                    // Resolve Edge 2
                    switch(edge2) {
                        case 0: // TOP
                            x2 = interpX[rowX_Top + i]; y2 = graphY; break;
                        case 1: // RIGHT
                            x2 = (i + 1) * subSize; y2 = interpY[rowY + i + 1]; break;
                        case 2: // BOTTOM
                            x2 = interpX[rowX_Bot + i]; y2 = graphY + subSize; break;
                        default: // LEFT
                            x2 = i * subSize; y2 = interpY[rowY + i]; break;
                    }

                    this.GRAPHED_FUNCTION.moveTo(x1, y1).lineTo(x2, y2);
                }
            }
        }

        this.GRAPHED_FUNCTION.stroke({ color: 0xffffff, width: 10, cap: 'round', join: 'round' });
    }

    plotPoint(point: Vector2D, color = 0xffffff, radius = 6) {
        // Store point for redraws
        this.plotted_points.push({ point: { ...point }, color, radius });

        const graphPoint = this.projectFunctionToGraph(point);
        this.GRAPHED_POINTS.circle(graphPoint.x, graphPoint.y, radius).fill(color);
    }

    clearPoints() {
        this.plotted_points = [];
        this.GRAPHED_POINTS.clear();
    }

    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        if (this.APP) {
            this.APP.destroy();
            this.APP = null;
        }
    }
}