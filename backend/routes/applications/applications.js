import { Router } from "express";
import applicationsSchema from "./schema.js";
import {
	getApplications,
	getNumberOfApplicants,
	insertApplication,
	insertApplicants,
	insertAddress,
	getAddressId,
	getApplicationById,
} from "./database-handler.js";
import calculateScore from "../../models/index.js";
import parseRequest from "./request-parser.js";
import parseResponse from "./response-parser.js";

const applicationsRouter = Router();

applicationsRouter.route("/").get(async (req, res) => {
	const desiredNumApplicants = parseInt(req.query.group);
	const idToFind = req.query.id;
	let applicationList = "";

	if (!desiredNumApplicants) {
		try {
			applicationList = await getApplications();

			if (applicationList.length === 0) {
				res.status(404).json({
					error: {
						code: 404,
						message: "No applications found in the database",
					},
				});
			} else {
				res.status(200).json({ applications: applicationList });
				console.log(applicationList);
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	} else {
		try {
			applicationList = await getNumberOfApplicants(desiredNumApplicants);

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
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	} else {
		applicationList = await getNumberOfApplicants(desiredNumApplicants);
	}

	if (applicationList.length === 0) {
		res.status(404).json({
			error: {
				code: 404,
				message: "No applications found",
			},
		});
	} else {
		res.status(200).json({ applications: applicationList });
	}
});

applicationsRouter.route("/new").put(async (req, res) => {
	try {
		const validatedRequest = await applicationsSchema.validateAsync(
			req.body,
		);
		const parsedRequest = parseRequest(validatedRequest);

		insertApplication(parsedRequest.applicationData);
		const timestamp = insertAddress(parsedRequest.addressData.address);
		const id = getAddressId(parsedRequest.addressData.address, timestamp);

		insertApplicants(
			parsedRequest.applicationData.id,
			id,
			parsedRequest.applicantsData,
		);
		calculateScore(parsedRequest.applicationData.id);
		const score = getScore(parsedRequest.applicationData.id);
		res.status(200).json({
			request: parsedRequest,
			applicationId: parsedRequest.applicationData.id,
			score: score,
		});
	} catch (e) {
		res.status(400).json({ code: 400, message: e.message });
	}
});

applicationsRouter.route("/:id").get((req, res) => {
	const id = req.params.id;
	const applicationData = getApplicationById(id);
	if (applicationData.length === 0) {
		res.status(404).json({
			code: 404,
			message: `Application with id ${id} not found`,
		});
	} else {
		const parsedResponse = parseResponse(applicationData);
		res.status(200).json(parsedResponse);
	}
});

export default applicationsRouter;
