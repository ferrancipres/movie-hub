import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controllers";

// Invocar Routes..para crear un router
const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById);
userRoutes.post('/', createUser);
userRoutes.patch('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);

export default userRoutes;