import { Router } from "express";
import db from "../../database/index.js";
import applicationsSchema from "./schema.js";
import {
	getApplicationById,
	getApplications,
	getNumberOfApplicants,
} from "./database-handler.js";

const applicationsRouter = Router();

applicationsRouter.route("/").get((req, res) => {
	const desiredNumApplicants = parseInt(req.query.group);
	let applicationList = "";
	if (!desiredNumApplicants) {
		applicationList = getApplications();
		if (applicationList.length === 0) {
			res.status(404).json({
				error: {
					code: 404,
					message: "No applications found in the database",
				},
			});
		}
		if (applicationList.length !== 0) {
			res.status(200).json({ applications: applicationList });
		}
	} else {
		applicationList = getNumberOfApplicants(desiredNumApplicants);

		if (applicationList.length === 0) {
			res.status(404).json({
				error: {
					code: 404,
					message:
						"No applications found with the specified number of applicants",
				},
			});
		} else {
			res.status(200).json({ applications: applicationList });
		}
	}
});

applicationsRouter.route("/new").put(async (req, res) => {
	try {
		const result = await applicationsSchema.validateAsync(req.body);
		res.send("passed");
	} catch (e) {
		res.status(400).send(e.message);
	}
});

export default applicationsRouter;
