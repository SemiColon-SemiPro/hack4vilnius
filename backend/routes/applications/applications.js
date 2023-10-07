import { Router } from "express";
import db from "../../database/index.js";
import applicationsSchema from "./schema.js";
import { getApplicationById, getApplications } from "./database-handler.js";

const applicationsRouter = Router();

applicationsRouter.route("/").get((req, res) => {
	const applications = getApplications();
	res.send(applications);
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

applicationsRouter
	.route("/:id")
	.get((req, res) => {
		const data = {
			queryParams: req.query,
			id: parseInt(req.params.id),
		};

		const application = getApplicationById(data.id);

		if (!application)
			res.status(404).send(`Application with id ${data.id} not found`);
		res.send(application);
	})
	.post(async (req, res) => {
		const id = parseInt(req.params.id);
		const application = db
			.prepare("SELECT * FROM applications WHERE id = ?")
			.get([id]);
		// check if exists
		if (!application) {
			res.status(404).send(
				"Application cannot be updated because it does not exists",
			);
			return;
		}

		try {
			const result = await applicationsSchema.validateAsync(req.body);
			// update application in db
			res.status(200).send(result);
		} catch (e) {
			console.error(e);
			res.status(400).send(e.message);
		}
	})
	.delete((req, res) => {
		const id = req.params.id;
		db.prepare("DELETE FROM applications WHERE id = ?").run(id);
		res.send(`Application with id ${id} deleted`);
	});

export default applicationsRouter;
