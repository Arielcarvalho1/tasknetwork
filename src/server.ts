import "express-async-errors"; // This will allow express to handle async errors seen as it doesn't support it in its vanilla state.
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express"; 
import "./database/CreateConnection"
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

// Its also important to have these after the routes. For obvious reasons.
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({Error: err.message});
    }

    return response.status(500).json({
        status: "Server error",
        message: "Internal server error"
    });

});

app.listen(4000, () => console.log("Server is running"));