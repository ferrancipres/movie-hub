import { NextFunction, Request, Response } from "express";
import userModel from "../model/user.model";

export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).send('Get: Get all users');
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

    res.status(200).send('Create: User created');
};

export const getUserbyId = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await userModel.findById({ _id: userId });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email } = req.body

    try {
        const user = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { name: name, email: email } }, { new: true });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await userModel.findByIdAndDelete({ _id: userId });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
    res.status(200).send('Delete: User  deleted');
}

// export const deleteUser = (req: Request, res: Response) => {
//     const {
//         params: { userId }
//     } = req;
//     if (!userId) res.status(500).send('Not found')
//     res.status(200).send(`Delete: Delete user ${userId}`);
// }