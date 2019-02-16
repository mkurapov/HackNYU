export interface Entry {
    id?: number;
    body?:string;
    date?: Date;
    title?: string;
}

export interface User {
    id?: number;
    name?:string;
}

export interface Chat {
    id?:number,
    users?: User[];
    name?: string;
}

