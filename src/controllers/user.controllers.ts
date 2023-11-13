import { Request, Response } from "express";
import userModel from "../model/user.model";
// NEW PRISMA
import prisma from "../db/client";

//NEW PRISMA:..cambiar 
// FUNCIONA OK
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findMany();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
};

// Vamos a utilizar un mtodo que  se llama populate..para sacar la información del id..
// que  cuando hagamos la busqueda de usuario en la relación con la movie salga la información..
// NEW PRISMA - OK
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        //  NEW CUIDADOS CAMBIOS
        // cuando con el  método populado.
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                movies: true
            }
        });
        // { _id: userId }).populate('movies');

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

// CAMBIAR CREATE USER..CON PRISMA
// Tenemos que cambiar nuestro 'userModel' por nuestro cliente de prisma
// CUIDADO
// FUNCIONA OK
export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) throw new Error('Missing fields');
        // CUIDADO. Hemos sustituido usermodel => prisma.user..y además le pusimos data:{''''}
        // IMPORTANTE. Si realizamos algún cambio en el schema.prisma..(model) habrá que hacer npx prisma generate
        const newUser = await prisma.user.create({
            data: { name, email, password }
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email, password } = req.body;

    try {
        //NEW PRISMA => OK
        //CUIDADO NO PONE  new:{true}
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name,
                email,
                password
            }
        });
        //  _id: userId },
        // { $set: { name: name, email: email, password: password } },
        // { new: true }

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

// NEW PRISMA => OK
// OJO CUIDADO..CAMBIO
export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await prisma.user.delete({
            where: {
                id: userId
            }
        });
        // _id: userId 
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
};
