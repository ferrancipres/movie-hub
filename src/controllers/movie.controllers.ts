import { Request, Response } from "express";

// Arrow function 'getAllMovies'
export const getAllMovies = (req: Request, res: Response) => {
    //  Method res para mandar un código hhttp. + method 'send' para imprimir mensaje.
    res.status(200).send('Get: Get All Movies');
};

export const getAllMoviesRegistered = (req: Request, res: Response) => {
    //  Method res para mandar un código hhttp. + method 'send' para imprimir mensaje.
    res.status(200).send('Get: Get All Movies Registered');
}

export const createMovie = (req: Request, res: Response) => {
    //  Method res para mandar un código hhttp. + method 'send' para imprimir mensaje.
    res.status(200).send('Post: Create movie');
}

export const deleteMovie = (req: Request, res: Response) => {
    //  Method res para mandar un código hhttp. + method 'send' para imprimir mensaje.
    //  Destructure obj 'movieId' throught req. params
    const { movieId } = req.params;
    if (!movieId) res.status(500).send('Not found');
    res.status(200).send(`Delete: Delete movie ${movieId}`);
}