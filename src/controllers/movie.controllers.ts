import { Request, Response } from 'express';
import prisma from '../db/client';
import { DATA_SOURCE, prismaClient } from '../db/client';
import { converToType } from '../helpers/utils';


export const getMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await prismaClient.movies.findMany({
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(201).json(allMovies);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const movie = await prismaClient.movies.findUnique({
            where: { id: converToType(movieId) },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const { name, poster_image, score, genres } = req.body;

    try {
        // SI CAMBIO AQUI ME DA ERROR
        const existingMovie = await prismaClient.movies.findUnique({
            where: { id: converToType(movieId) },
            include: { genres: { select: { genre: { select: { name: true } } } } },
        });

        if (!existingMovie) {
            return res.status(404).json({ error: "Movie not found" });
        }

        const existingGenres = existingMovie.genres.map((genre: { genre: { name: string } }) => genre.genre?.name).filter(Boolean);

        const newGenres = genres.filter((genre: { name: string; }) => !existingGenres.includes(genre.name));

        const updatedMovie = await prismaClient.movies.update({
            where: { id: converToType(movieId) },
            data: {
                name,
                poster_image,
                score,
                genres: {
                    create: newGenres.map((genre: { name: string; }) => ({
                        genre: {
                            connectOrCreate: {
                                where: { name: genre.name },
                                create: { name: genre.name },
                            },
                        },
                    })),
                },
            },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } },
                },
            },
        });

        res.status(201).json(updatedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const deletedMovie = await prismaClient.movies.delete({
            where: { id: converToType(movieId) }
        });

        res.status(200).json(deletedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createMovie = async (req: Request, res: Response) => {
    const { name, poster_image, score, genres } = req.body;
    const { userId } = req.params;

    try {
        const movie = await prismaClient.movies.create({
            data: {
                name,
                poster_image,
                score,
                genres: {
                    create: genres.map((genre: { name: string }) => ({
                        genre: {
                            connectOrCreate: {
                                where: { name: genre.name },
                                create: { name: genre.name },
                            },
                        },
                    })),
                },
                User: { connect: { id: converToType(userId) } },
            },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};
