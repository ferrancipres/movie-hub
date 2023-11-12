import { Request, Response } from "express";
import movieModel from "../model/movie.model";

// Arrow function 'getAllMovies' => OK
export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movie = await movieModel.find();
        res.status(200).json(movie);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const movie = await movieModel.findById({ _id: movieId });

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createMovie = async (req: Request, res: Response) => {
    const { name, poster, score } = req.body;

    try {
        if (!name || !poster || !score) throw new Error('Missing fields');

        const newMovie = await movieModel.create({ name, poster, score });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const { name, poster, score } = req.body;

    try {
        const movie = await movieModel.findOneAndUpdate({ _id: movieId },
            { $set: { name: name, poster: poster, score: score } },
            { new: true }
        );

        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const movie = await movieModel.findByIdAndDelete({ _id: movieId });

        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};