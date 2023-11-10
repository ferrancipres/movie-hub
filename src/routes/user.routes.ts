import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserbyId, updateUser } from "../controllers/user.controllers";

const userRoutes = Router();
userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserbyId)
userRoutes.post('/', createUser);
userRoutes.patch('/:userId', updateUser)
userRoutes.delete('/:userId', deleteUser)

export default userRoutes;