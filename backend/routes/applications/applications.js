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

	if (!desiredNumApplicants) {
		const applicantionList = getApplications();
		if (applicantionList.length === 0) {
			res.status(404).json({
				error: {
					code: 404,
					message: "No applications found in the database",
				},
			});
		}
		if (applicantionList.length !== 0) {
			res.status(200).json({ applications: applicantionList });
		}
	}

	const applicationsList = getNumberOfApplicants(desiredNumApplicants);

	if (applicationsList.length === 0) {
		res.status(404).json({
			error: {
				code: 404,
				message:
					"No applications found with the specified number of applicants",
			},
		});
	} else {
		res.status(200).json({ applications: applicationsList });
	}
});

applicationsRouter.route("/new").put(async (req, res) => {
	try {
		const result = await applicationsSchema.validateAsync(req.body);
		const new_application = null;
		// add new application in db
		res.send(new_application);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

export default applicationsRouter;
