import { Router } from "express";
import {
	getHouses,
	getHouseById,
	updateHouseAvailability,
} from "./database-handler.js";

const housesRouter = Router();

housesRouter.route("/").get((req, res) => {
	const housesList = getHouses();
	if (housesList.length === 0) {
		res.status(404).json({
			error: {
				code: 404,
				message: "No houses found in the database",
			},
		});
	}
	if (housesList.length !== 0) {
		res.status(200).json({ houses: housesList });
	}
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
