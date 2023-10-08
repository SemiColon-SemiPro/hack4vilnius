import db from "../database/index.js";

const SELECT_AVERAGE_DISABILITY =
	"SELECT AVG(disability_level) score FROM applicants WHERE application_id = ?";
const UPDATE_SCORE = "UPDATE applications SET score = ? WHERE id = ?";
const GET_SCORE = "SELECT score FROM applications WHERE id = ?";

// functions
export const getAverageDisabilityByApplication = (applicationId) => {
	const avgDisability = db
		.prepare(SELECT_AVERAGE_DISABILITY)
		.get([applicationId]);

	return avgDisability;
};

export const addDisabilityScore = (score, applicationId) => {
	const currentScore = db.prepare(GET_SCORE).get(applicationId).score;
	const updatedScore = currentScore + score;
	const stmt = db.prepare(UPDATE_SCORE).run([updatedScore, applicationId]);
};
