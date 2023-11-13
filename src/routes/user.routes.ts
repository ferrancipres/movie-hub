import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controllers";
import { check } from "../middleware/check.middleware";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById);
userRoutes.post('/', check, createUser);
userRoutes.patch('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);

export default userRoutes;