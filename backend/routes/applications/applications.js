import { Router } from "express";
import applicationsSchema from "./schema.js";
import {
	getApplications,
	getNumberOfApplicants,
	insertApplication,
	insertApplicants,
	insertAddress,
	getAddressId,
} from "./database-handler.js";
import parseRequest from "./request-parser.js";

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
		const validatedRequest = await applicationsSchema.validateAsync(
			req.body,
		);
		const parsedRequest = parseRequest(validatedRequest);
		await insertApplication(parsedRequest.applicationData);
		const timestamp = await insertAddress(parsedRequest.addressData.address);
		const id = await getAddressId(parsedRequest.addressData.address, timestamp);
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
