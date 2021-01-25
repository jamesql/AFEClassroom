import "express";

declare global{
    namespace Express {
        interface Request {
        }
    }

    interface Permission {
        val: string;
        num?: number;
    }
}