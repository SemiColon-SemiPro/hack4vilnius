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
import parseRequest from "./request-parser.js";

const applicationsRouter = Router();

applicationsRouter.route("/").get(async (req, res) => {
	const desiredNumApplicants = parseInt(req.query.group);
	const idToFind = req.query.id;
	let applicationList = "";

	if (!desiredNumApplicants && !idToFind) {
		applicationList = await getApplications();
	} else if (!desiredNumApplicants && idToFind) {
		const application = await getApplicationById(idToFind);

		if (application) {
			applicationList = [application];
		} else {
			applicationList = [];
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
		await insertApplication(parsedRequest.applicationData);
		const timestamp = await insertAddress(
			parsedRequest.addressData.address,
		);
		const id = await getAddressId(
			parsedRequest.addressData.address,
			timestamp,
		);
		insertApplicants(
			parsedRequest.applicationData.id,
			id,
			parsedRequest.applicantsData,
		);
		res.status(200).json(parsedRequest);
	} catch (e) {
		res.status(400).json({ code: 400, message: e.message });
	}
});

export default applicationsRouter;
