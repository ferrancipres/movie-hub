import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getAllUsersRegistered } from "../controllers/user.controllers";

const userRoutes = Router();
userRoutes.get('/', getAllUsers);
userRoutes.post('/', createUser);

userRoutes.delete('/:userId', deleteUser)
userRoutes.get('/registered', getAllUsersRegistered);


export default userRoutes;