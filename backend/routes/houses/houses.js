import { Router } from "express";
import {
	getHouses,
	getHouseById,
	updateHouseAvailability,
} from "./database-handler.js";

const housesRouter = Router();

housesRouter.route("/").get((req, res) => {
	res.send(getHouses());
});

housesRouter.route("/:id").get((req, res) => {
	const id = req.params.id;
	res.send(getHouseById(id));
});

housesRouter.route("/available/:id").put((req, res) => {
	const id = req.params.id;
	res.send(updateHouseAvailability(id));
});

export default housesRouter;
