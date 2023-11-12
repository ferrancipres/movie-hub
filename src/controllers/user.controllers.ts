import { Request, Response } from "express";
import userModel from "../model/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await userModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) throw new Error('Missing fields');

        const newUser = await userModel.create({ name, email, password });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await userModel.findById({ _id: userId });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await userModel.findByIdAndUpdate({ _id: userId },
            { $set: { name: name, email: email, password: password } },
            { new: true }
        );

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await userModel.findByIdAndDelete({ _id: userId });

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
};
