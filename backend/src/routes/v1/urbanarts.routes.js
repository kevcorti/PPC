import { Router } from "express";
import {
  getAllUrbanArtsCategories,
  getUrbanArtsByCategory,
  getUrbanArtsByFilter,
} from "../../controllers/urbanarts.controller.js";

const urbanArtsRouter = Router();

/**
 * @swagger
 * /api/v1/urbanarts/filter:
 *   get:
 *     tags:
 *       - UrbanArts
 *     parameters:
 *       - in: query
 *         name: idCity
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The City Ecuador ID
 *       - in: query
 *         name: page
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The number of page.
 *       - in: query
 *         name: pageSize
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The quantity of data.
 *       - in: query
 *         name: idPhotographer
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Photographer who took the photo.
 */
urbanArtsRouter.get("/filter", getUrbanArtsByFilter);

/**
 * @swagger
 * /api/v1/urbanarts/categories:
 *   get:
 *     tags:
 *       - UrbanArts
 */
urbanArtsRouter.get("/categories", getAllUrbanArtsCategories);

/**
 * @swagger
 * /api/v1/urbanarts/categories/{id}:
 *   get:
 *     tags:
 *       - UrbanArts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Category ID
 */
urbanArtsRouter.get("/categories/:id", getUrbanArtsByCategory);
export default urbanArtsRouter;
