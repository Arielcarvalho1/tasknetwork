import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    // Make sure we get a token.
    if(!authToken) {
        return response.status(401).end();
    }

    const [,token] = authToken.split(" "); // Removing the word "Bearer" from start of the token.

    try {
        const decode = verify(token, "0cf0607937013cb58d79a7d3c59d4e11") as IPayload;
        const sub = decode.sub;
        request.userid = sub; // Setting the userid to the user that's logged in.

    } catch(err){
        // Just in case the token isn't able to be decoded.
        return response.status(401).end();
    }

    return next();
}