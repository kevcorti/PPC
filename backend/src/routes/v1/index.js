import { Router } from "express";
import usersRouter from "./users.routes.js";
import markersRouter from "./markers.routes.js";
import urbanArtsRouter from "./urbanarts.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router();

router.use('/users', usersRouter);
router.use('/markers', markersRouter);
router.use('/urbanarts', urbanArtsRouter);
router.use("/cities", citiesRouter);

export default router;