import { Request, Response } from 'express';
import movieModel from '../model/movie.model';
import userModel from '../model/user.model';
import prisma from "../db/client";

//OK
export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const allMovie = await prisma.movies.findMany({
            include: {
                genres: true
            }
        });
        res.status(201).json(allMovie);
    } catch (error) {
        res.status(500).json(error)
    }
};

// OK
export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const movie = await prisma.movies.findUnique({
            where: { id: movieId },
            include: {
                genres: true
            }
        });
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error)
    }
}

// OK
export const createMovie = async (req: Request, res: Response) => {
    const { name, poster_image, score, genres } = req.body;
    const { userId } = req.params;

    try {
        const createMovie = await prisma.movies.create({
            data: {
                name,
                poster_image,
                score,
                genres: { connect: genres.map((genre: String) => ({ id: genre })) },
                User: { connect: { id: userId } }
            }
        });
        res.status(201).json(createMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

// OK
export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const { name, poster_image, score, genres } = req.body;

    try {
        const updatedMovie = await prisma.movies.update({
            where: { id: movieId },
            data: {
                name,
                poster_image,
                score,
                genres: { connect: genres.map((genre: String) => ({ id: genre })) }
            }
        });
        res.status(201).json(updatedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

// OK
export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const deleteMovie = await prisma.movies.delete({
            where: { id: movieId }
        });
        res.status(201).json(deleteMovie);
    } catch (error) {
        res.status(500).json(error)
    }
};