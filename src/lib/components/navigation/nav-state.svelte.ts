interface navState {
    sections: {
        id: string;
        label: string;
    }[];
}

/**
 * YOU NEED TO BE MOUNTED BEFORE UPDATING THIS.
 */
export const navState: navState = $state({
    sections: []
});