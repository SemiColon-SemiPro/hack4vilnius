import { Router } from "express";
import {
	getHouses,
	getHouseById,
	updateHouseAvailability,
	getHouseByGroup,
} from "./database-handler.js";

const housesRouter = Router();

housesRouter.route("/").get((req, res) => {
	const group = parseInt(req.query.group);
	let housesList = [];

	if (group) {
		housesList = getHouseByGroup(group);
	} else {
		housesList = getHouses();
	}

	if (!housesList || housesList.length === 0) {
		res.status(404).json({
			error: {
				code: 404,
				message: "No houses found",
			},
		});
	}
	if (housesList.length !== 0) {
		res.status(200).json({ houses: housesList });
	}
});

housesRouter.route("/available/:id").put((req, res) => {
	const id = req.params.id;
	res.send(updateHouseAvailability(id));
});

export default housesRouter;
