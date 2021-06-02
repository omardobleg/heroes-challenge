export interface Filter {
    name: string;
    alias: string;
    quirk: string;
    occupation: string;
    affiliation: string;
}

export type FilterSearch = Partial<Filter>;