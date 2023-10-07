import db from "../../database/index.js";

// queries
const SELECT_APPLICANTS = "SELECT * FROM applicants";
const SELECT_APPLICANT_BY_ID = "SELECT * FROM applicants WHERE id = ?";
const SELECT_APPLICANT_BY_NAME =
	'SELECT * FROM applicants WHERE name LIKE "%?%"';

// functions
export const getApplicants = () => {
	const applicants = db.prepare(SELECT_APPLICANTS).all();
	console.debug("Applicants retrieved: ", applicants.length);
	return applicants;
};

export const getApplicantById = (id) => {
	const applicant = db.prepare(SELECT_APPLICANT_BY_ID).get(id);
	console.debug(`Applicant with id ${id} retrieved: `, applicant);
	return applicant;
};

export const getApplicantByName = (name) => {
	const applicant = db.prepare(SELECT_APPLICANT_BY_NAME).get(name);
	console.debug(`Applicant with name ${name} retrieved: `, applicant);
	return applicant;
};
