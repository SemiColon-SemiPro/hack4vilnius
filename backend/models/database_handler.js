import db from "../database/index.js";

const SELECT_AVERAGE_DISABILITY =
	"SELECT AVG(disability_level) score FROM applicants WHERE application_id = ?";
const UPDATE_SCORE = "UPDATE applications SET score = ? WHERE id = ?";
const GET_SCORE = "SELECT score FROM applications WHERE id = ?";
const GET_DATE_OF_BIRTHS =
	"SELECT date_of_birth FROM applicants WHERE application_id = ?";

// functions
export const getAverageDisabilityByApplication = (applicationId) => {
	const avgDisability = db
		.prepare(SELECT_AVERAGE_DISABILITY)
		.get([applicationId]);

	return avgDisability;
};

export const addScore = (score, applicationId) => {
	const currentScore = db.prepare(GET_SCORE).get(applicationId).score;
	const updatedScore = currentScore + score;
	const stmt = db.prepare(UPDATE_SCORE).run([updatedScore, applicationId]);
};

export const getAgeOfBirthsByApplication = (applicationId) => {
	const dateOfBirths = db.prepare(GET_DATE_OF_BIRTHS).all([applicationId]);
	return dateOfBirths;
};
