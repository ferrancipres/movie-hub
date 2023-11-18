import { Router } from "express";
import { createGenre, deleteGenre, allGenre } from "../controllers/genre.controllers";

const genreRouter = Router();

genreRouter.get('/', allGenre);

genreRouter.post('/', createGenre);

genreRouter.delete('/:genreId', deleteGenre);

export default genreRouter;