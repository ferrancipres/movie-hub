import { Router } from "express";
import { addGenreToMovieById, createGenre, deleteGenre, getAllGenres } from "../controllers/genre.controllers";

// Invocar Routes..para crear un  router
const genreRouter = Router();

genreRouter.get('/', getAllGenres);
genreRouter.post('/', createGenre);
genreRouter.patch('/:movieId', addGenreToMovieById)
genreRouter.delete('/:genreId', deleteGenre);

export default genreRouter;