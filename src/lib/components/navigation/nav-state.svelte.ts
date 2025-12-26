interface navState {
    sections: {
        id: string;
        label: string;
    }[];
}

export const navState: navState = $state({
    sections: []
});