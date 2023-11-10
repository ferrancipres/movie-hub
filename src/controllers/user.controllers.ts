import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).send('Get all users');
}

export const getAllUsersRegistered = (req: Request, res: Response) => {
    res.status(200).send('Get: Get all users registered');
}

export const createUser = (req: Request, res: Response) => {
    res.status(200).send('Create: Create user');
}

export const deleteUser = (req: Request, res: Response) => {
    const {
        params: { userId }
    } = req;
    if (!userId) res.status(500).send('Not found')
    res.status(200).send(`Delete: Delete user ${userId}`);
}