import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movie.controllers";

// Invocar Routes..para crear un router
const movieRouter = Router();

movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId', getMovieById);
// ¿Es correcto? 'userId' no haría falta en todas...
movieRouter.post('/:userId', createMovie);
movieRouter.patch('/:movieId', updateMovie);
movieRouter.delete('/:movieId', deleteMovie);
// delete general seria interesante..y para todas las rutas.. 

export default movieRouter;