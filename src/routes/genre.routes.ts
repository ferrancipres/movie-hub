import { Router } from "express";
import { addGenreById, createGenre, deleteGenre, getAllGenres } from "../controllers/genre.controllers";

// Invocar Routes..para crear un  router
const genreRouter = Router();

genreRouter.get('/', getAllGenres);
genreRouter.post('/', createGenre);
genreRouter.get('/:movieId/', addGenreById)
genreRouter.delete('/:genreId', deleteGenre);

export default genreRouter;