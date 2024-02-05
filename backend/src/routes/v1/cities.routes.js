import { Router } from "express";
import { getAllCitiesInCost } from "../../controllers/cities.controller.js";

const citiesRouter = Router();

/**
 * @swagger
 * /api/v1/cities:
 *   get:
 *     tags:
 *       - Cities
 */
citiesRouter.get("/", getAllCitiesInCost);

export default citiesRouter;