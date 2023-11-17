import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByEmail, getUserById, updateUser } from "../controllers/user.controllers";
import { checkJwtMiddleware } from "../middleware/checkJwt.middleware";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById);
userRoutes.get('/email/:userEmail', getUserByEmail);
userRoutes.post('/', createUser);
userRoutes.patch('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);

export default userRoutes;