import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json(RESPONSE_MESSAGE.UNAUTHORIZED);
        return;
    }

    const token = authHeader.split("Bearer ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        const { id } = decoded as { id: string };

        if (!id) {
            res.status(403).json(RESPONSE_MESSAGE.FORBIDDEN);
            return;
        }

        req.body.id = id;
        next(); // Autenticação bem-sucedida
    } catch (error) {
        res.status(403).json(RESPONSE_MESSAGE.FORBIDDEN);
    }
};

const RESPONSE_MESSAGE = {
    UNAUTHORIZED: {
        message: "Authentication required. Please provide a valid token."
    },
    FORBIDDEN: {
        message: "Access denied. Invalid or expired token."
    }
};