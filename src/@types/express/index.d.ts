// Subscribing the express library to add userid as a type.

declare namespace Express {
    export interface Request {
        userid: string;
    }
}