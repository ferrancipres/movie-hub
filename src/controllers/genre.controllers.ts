import { Request, Response } from "express";
import genreModel from "../model/genre.model";
import userModel from "../model/user.model";
import prisma from "../db/client";

// OK
export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const genres = await prisma.genres.findMany();
        res.status(200).json(genres)
    } catch (error) {
        res.status(500).json(error)
    }
};

// OK
export const addGenreById = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const { genreId } = req.body;

    try {
        const movie = await prisma.movies.findUnique({
            where: { id: movieId }
        });

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        const updateMovie = await prisma.movies.update({
            where: { id: movieId },
            data: {
                genres: {
                    connect: { id: genreId }
                }
            }
        });
        res.status(200).json(updateMovie);
    } catch (error) {
        res.status(500).json(error)
    }
}

//  OK
export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const genre = await prisma.genres.create({ data: { name } });
        res.status(200).json(genre);
    } catch (error) {
        res.status(500).json(error);
    }
}

// OK
export const deleteGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params;

    try {
        const deleteGenre = await prisma.genres.delete({
            where: { id: genreId }
        });

        res.status(200).json(deleteGenre);
    } catch (error) {
        res.status(500).json(error)
    }
}