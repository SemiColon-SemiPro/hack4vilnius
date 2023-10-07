import { Router } from "express";
import db from "../../database/index.js";
import applicationsSchema from "./schema.js";
import {
	getApplicationById,
	getApplications,
	getNumberOfApplicants,
} from "./database-handler.js";

const applicationsRouter = Router();

// applicationsRouter.route("/").get((req, res) => {
// 	const applicantionList = getApplications();
// 	if (applicantionList.length === 0) {
// 		res.status(404).json({
// 			error: {
// 				code: 404,
// 				message: "No applications found in the database",
// 			},
// 		});
// 	}
// 	if (applicantionList.length !== 0) {
// 		res.status(200).json({ applications: applicantionList });
// 	}
// });

applicationsRouter.route("/").get((req, res) => {
	const desiredNumApplicants = parseInt(req.query.group);

	if (!desiredNumApplicants) {
		res.status(400).json({
			error: {
				code: 400,
				message:
					"Please provide the desired number of applicants as a query parameter (num_applicants).",
			},
		});
		return;
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

// applicationsRouter
// 	.route("/:id")
// 	.get((req, res) => {
// 		const data = {
// 			queryParams: req.query,
// 			id: parseInt(req.params.id),
// 		};

// 		const application = getApplicationById(data.id);

// 		if (!application)
// 			res.status(404).send(`Application with id ${data.id} not found`);
// 		res.send(application);
// 	})
// 	.post(async (req, res) => {
// 		const id = parseInt(req.params.id);
// 		const application = db
// 			.prepare("SELECT * FROM applications WHERE id = ?")
// 			.get([id]);
// 		// check if exists
// 		if (!application) {
// 			res.status(404).send(
// 				"Application cannot be updated because it does not exists",
// 			);
// 			return;
// 		}

// 		try {
// 			const result = await applicationsSchema.validateAsync(req.body);
// 			// update application in db
// 			res.status(200).send(result);
// 		} catch (e) {
// 			console.error(e);
// 			res.status(400).send(e.message);
// 		}
// 	})
// 	.delete((req, res) => {
// 		const id = req.params.id;
// 		db.prepare("DELETE FROM applications WHERE id = ?").run(id);
// 		res.send(`Application with id ${id} deleted`);
// 	});

export default applicationsRouter;
