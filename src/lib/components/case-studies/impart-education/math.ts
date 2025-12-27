export interface Vector2D {
    x: number;
    y: number;
}

export interface Vector3D {
    x: number;
    y: number;
    z: number;
}

export class Matrix {
    rows: number;
    cols: number;
    private matrix: number[][];

    constructor(rows: number, cols = 1, fill: (i: number, j: number) => number = () => 0) {
        this.rows = rows;
        this.cols = cols;
        // Optimized: Standard loop is much faster than Array.from with callback
        this.matrix = new Array(rows);
        for (let i = 0; i < rows; i++) {
            const row = new Array(cols);
            for (let j = 0; j < cols; j++) {
                row[j] = fill(i, j);
            }
            this.matrix[i] = row;
        }
    }

    set(val: number, i: number, j = 0) {
        this.matrix[i][j] = val;
        return this;
    }

    get(i: number, j = 0) {
        return this.matrix[i][j];
    }

    add(other: Matrix) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("Matrices must have the same dimensions for addition");
        }

        // Optimized: Pre-allocate and loop
        const ret = new Matrix(this.rows, this.cols);
        const a = this.matrix;
        const b = other.matrix;
        const out = ret.matrix;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                out[i][j] = a[i][j] + b[i][j];
            }
        }

        return ret;
    }

    subtract(other: Matrix) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("Matrices must have the same dimensions for subtraction");
        }

        const ret = new Matrix(this.rows, this.cols);
        const a = this.matrix;
        const b = other.matrix;
        const out = ret.matrix;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                out[i][j] = a[i][j] - b[i][j];
            }
        }

        return ret;
    }

    hadamard_product(other: Matrix) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("Matrices must have the same dimensions for element-wise multiplication");
        }

        const ret = new Matrix(this.rows, this.cols);
        const a = this.matrix;
        const b = other.matrix;
        const out = ret.matrix;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                out[i][j] = a[i][j] * b[i][j];
            }
        }
        return ret;
    }

    multiply(other: Matrix) {
        if (this.cols !== other.rows) {
            throw new Error("Matrices must have the same cols/rows dimensions for matrix multiplication");
        }

        const ret = new Matrix(this.rows, other.cols);
        const a = this.matrix;
        const b = other.matrix;
        const out = ret.matrix;
        const K = this.cols;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let val = 0;
                for (let k = 0; k < K; k++) {
                    val += a[i][k] * b[k][j];
                }
                out[i][j] = val;
            }
        }

        return ret;
    }

    transpose() {
        const ret = new Matrix(this.cols, this.rows);
        const a = this.matrix;
        const out = ret.matrix;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                out[j][i] = a[i][j];
            }
        }

        return ret;
    }

    applyFunction(func: (z: number) => number) {
        const ret = new Matrix(this.rows, this.cols);
        const a = this.matrix;
        const out = ret.matrix;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                out[i][j] = func(a[i][j]);
            }
        }

        return ret;
    }

    magnitude() {
        let mag = 0;
        const a = this.matrix;
        // Optimization: Assuming vector (nx1 or 1xn) check not strictly enforced by types, but logical usage
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const comp = a[i][j];
                mag += comp * comp;
            }
        }
        return Math.sqrt(mag);
    }
}