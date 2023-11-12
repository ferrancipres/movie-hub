import { Router } from "express";
import { createGenre, deleteGenre, getAllGenres, getGenreById, updateGenre } from "../controllers/genre.controllers";

// Invocar Routes..para crear un  router
const genreRouter = Router();

genreRouter.get('/', getAllGenres);
genreRouter.get('/:genreId', getGenreById);
genreRouter.post('/', createGenre);
genreRouter.patch('/:genreId', updateGenre);
genreRouter.delete('/:genreId', deleteGenre);

export default genreRouter;