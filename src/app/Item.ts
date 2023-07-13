export enum Category {
    Audio,
    Input,
    Cable,
    PC,
    TV,
    Other
}

export interface Item {
    id?: number;
    text: string;
    quantity: number;
    category: Category;
    missing: boolean;
}