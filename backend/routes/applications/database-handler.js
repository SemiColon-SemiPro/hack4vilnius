import db from "../../database/index.js";

// queries
const SELECT_APPLICAITONS = "SELECT * FROM applications";
const SELECT_APPLICATION_BY_ID = "SELECT * FROM applications WHERE id = ?";
const SELECT_APPLICATIONS_WITH_NUM_APPLICANTS = `
SELECT applications.score, applications.status, application_id , COUNT() count_of_applicants
FROM applicants
JOIN applications
ON application_id = applications.id
GROUP BY application_id
HAVING COUNT() = ?;
`;



// functions
export const getApplications = () => {
	const applications = db.prepare(SELECT_APPLICAITONS).all();
	console.debug("Number of applications retrieved: ", applications.length);
	return applications;
};

export const getApplicationById = (id) => {
	const application = db.prepare(SELECT_APPLICATION_BY_ID).get(id);
	console.debug(`Application with id ${id} retrieved: `, application);
	return application;
};

export const getNumberOfApplicants = (num) => {
	const applications = db
		.prepare(SELECT_APPLICATIONS_WITH_NUM_APPLICANTS)
		.all(num);
	console.debug(
		"Applications with",
		num,
		"applicants retrieved: ",
		applications.length,
	);
	return applications;
};
