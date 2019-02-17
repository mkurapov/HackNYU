export interface Entry {
    id?: number;
    body?:string;
    date?: Date;
    title?: string;
    classifications?:Classification[]
}

export interface Classification {
    name?: string;
    salience?: number;
    sentiment?: number
}

export interface User {
    userId?: string;
    name?:string;
    classifications?:Classification[]
}

export interface Chat {
    id?:number,
    users?: User[];
    name?: string;
    classifications?:Classification[]
}

