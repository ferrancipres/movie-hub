import { Request, Response } from "express";
import userModel from "../model/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await userModel.find();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
};

// Vamos a utilizar un mtodo que  se llama populate..para sacar la información del id..
// que  cuando hagamos la busqueda de usuario en la relación con la movie salga la información..

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        // cuando con el  método populado.
        const user = await userModel.findById({ _id: userId }).populate('movies');

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

// CAMBIAR CREATE USER..CON PRISMA

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
