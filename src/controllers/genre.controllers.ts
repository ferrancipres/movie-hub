import { Request, Response } from "express";
import genreModel from "../model/genre.model";

export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const genre = await genreModel.find();
        res.status(200).send(genre);

    } catch (error) {
        res.status(500).json(error)
    }
};

export const getGenreById = async (req: Request, res: Response) => {
    const { genreId } = req.params;

    try {
        const genre = await genreModel.findById({ _id: genreId }).populate('movies');

        res.status(200).send(genre);
    } catch (error) {
        res.status(500).json(error);

    }
};

export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        if (!name) throw new Error('Missing fields');

        const newGenre = await genreModel.create({ name });
        res.status(201).json(newGenre);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params;
    const { name } = req.body;

    try {
        const genre = await genreModel.findByIdAndUpdate({ _id: genreId },
            { $set: { name: name } },
            { new: true }
        );

        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params;

    try {
        const genre = await genreModel.findByIdAndDelete({ _id: genreId });

        res.status(200).send(genre);
    } catch (error) {
        res.status(500).json(error);
    }
};