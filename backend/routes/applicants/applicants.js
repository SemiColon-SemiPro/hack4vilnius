import { Router } from "express";
import { getApplicants } from "./database-handler.js";

const applicantsRouter = Router();

applicantsRouter.route("/").get((req, res) => {
	const applicantList = getApplicants();
	if (applicantList.length === 0) {
		res.status(200).json({
			error: {
				code: 404,
				message: "No applicants found in the database",
			},
		});
	}
	if (applicantList.length !== 0) {
		res.status(200).json({ applicant: applicantList });
	}
});

export default applicantsRouter;
