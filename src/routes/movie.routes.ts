import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movie.controllers";

const movieRouter = Router();

movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.post('/:userId', createMovie);
movieRouter.patch('/:movieId', updateMovie);
movieRouter.delete('/:movieId', deleteMovie);


export default movieRouter;