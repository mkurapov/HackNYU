export interface Entry {
    id?: number;
    body?:string;
    date?: Date;
    title?: string;
}

export interface User {
    userId?: string;
    name?:string;
}

export interface Chat {
    id?:number,
    users?: User[];
    name?: string;
}

