// Servidor

import express from 'express';
import userRoutes from './routes/user.routes';
import movieRoutes from './routes/movie.routes'

// invocar express
const app = express();

// middleware to allow use json
// parchear json..y añade headers a la petcición
app.use(express.json());

// middleware to allow create a user route, y routee todo el trafico hasta allí
app.use('/user', userRoutes);

// middleware to allow create a user route, y routee todo el trafico hasta allí
app.use('/movie', movieRoutes)

// export default
export default app;