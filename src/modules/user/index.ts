import { Router } from 'express';
import userController from './userController';
const UserRouter = Router();

UserRouter.post('/createUser', userController.createUser);

export default UserRouter;
