import { Request, Response } from "express";
import userModel from "../model/user.model";
import prisma from "../db/client";

// OK
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUser = await prisma.user.findMany({
            include: {
                movies: {
                    include: { genres: true }
                }
            }
        });
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// OK
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const getUser = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                movies: {
                    include: {
                        genres: true
                    }
                }
            }
        });

        res.status(201).json(getUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// OK
export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) throw new Error('Missing fields');

        const createUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        res.status(201).json(createUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// OK
export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email } = req.body;

    try {
        const updateUser = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name,
                email
            }
        });

        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// OK
export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: userId
            }
        });

        res.status(201).json(deleteUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
