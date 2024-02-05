import { Router } from "express";
import {
  createPhotographer,
  createUser,
  getAllPhotographersApp,
} from "../../controllers/users.controller.js";

const usersRouter = Router();

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 */
usersRouter.post("/", createUser);

/**
 * @swagger
 * /api/v1/users/photographers:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Formato para crear un Arte Urbano.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: johndoe@gmail.com
 *               names:
 *                 type: string
 *                 example: John Doe
 *               password:
 *                 type: string
 *                 example: 1234
 *               biography:
 *                 type: string
 *                 example: Soy una persona aposionada por tomar fotos, que las tomo todos los dias sin parar.
 *               id_rol:
 *                 type: number
 *                 example: 2
 */
usersRouter.post("/photographers", createPhotographer);

/**
 * @swagger
 * /api/v1/users/photographers:
 *   get:
 *     tags:
 *       - Users
 */
usersRouter.get("/photographers", getAllPhotographersApp);
export default usersRouter;
