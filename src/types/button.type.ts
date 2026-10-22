export interface buttonType {
    kind: "blue" | "light" | "default"
}

export interface linkButtonType {
    active: boolean;
    link?: string;
    content?: string;
}
