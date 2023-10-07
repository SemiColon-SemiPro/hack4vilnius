import { Router } from "express";
import { getHouses, getHouseById } from "./database-handler.js";

const housesRouter = Router();

housesRouter.route("/").get((req, res) => {
	const housesList = getHouses();
	if (housesList.length === 0) {
		res.status(200).json({
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
	const id = parseInt(req.params.id);
	res.send(getHouseById(id));
});

export default housesRouter;
