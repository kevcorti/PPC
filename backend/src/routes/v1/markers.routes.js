import { Router } from "express";
import {
  createMarker,
  deleteMarker,
  editMarker,
  getAllMarkers,
  getMarkerById,
} from "../../controllers/markers.controller.js";

const markersRouter = Router();

/**
 * @swagger
 * /api/v1/markers:
 *   get:
 *     tags:
 *       - Markers
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 latitude:
 *                   type: number
 *                   example: -79.4344
 *                 longitude:
 *                   type: number
 *                   example: -2.43434
 *                 id_urbanart:
 *                   type: integer
 *                   example: 1
 */
markersRouter.get("/", getAllMarkers);

/**
 * @swagger
 * /api/v1/markers/{id}:
 *   get:
 *     tags:
 *       - Markers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Marker ID
 */
markersRouter.get("/:id", getMarkerById);

/**
 * @swagger
 * /api/v1/markers:
 *   post:
 *     tags:
 *       - Markers
 *     requestBody:
 *       description: Formato para crear un Arte Urbano.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mural La Gran Luchadora
 *               description:
 *                 type: string
 *                 example: Mural pindando en ... y cuenta con ..., ademas ... como el mejor.
 *               url_photo:
 *                 type: string
 *                 example: https://www.google.com/photos/1
 *               id_user:
 *                 type: string
 *                 example: 2f63f808-dab2-4c44-846c-890c7e4bf310
 *               id_city:
 *                 type: number
 *                 example: 1
 *               id_urbanartcategory:
 *                 type: number
 *                 example: 1
 *               address:
 *                 type: string
 *                 example: Barrio Cuba Mz 45 Villa 603
 *               coords:
 *                 type: string
 *                 example: -79.22222,-2.34323
 */
markersRouter.post("/", createMarker);

/**
 * @swagger
 * /api/v1/markers/{id}:
 *   put:
 *     tags:
 *       - Markers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Marker ID
 */
markersRouter.put("/:id", editMarker);

/**
 * @swagger
 * /api/v1/markers/{id}:
 *   delete:
 *     tags:
 *       - Markers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Marker ID
 */
markersRouter.delete("/:id", deleteMarker);

export default markersRouter;
