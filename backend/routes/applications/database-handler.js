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
const INSERT_APPLICATION =
	"INSERT INTO applications (id, status, score, created_at, updated_at, occupied_property, useful_mq) VALUES (?, ?, ?, ?, ?, ?, ?)";
const INSERT_APPLICANT =
	"INSERT INTO applicants (first_name, last_name, age, disability_level, refugee, income, flag, address_id, application_id, created_at, updated_at, email, phone_number, applicant_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// functions
export const insertApplicants = (applicantsData) => {
	applicantsData.forEach((applicant) => {

		const stmt = db.prepare(INSERT_APPLICANT);
		stmt.run([
			applicant.firstName,
			applicant.lastName,
			applicant.dateOfBirth,
			applicant.disabilityLevel,
			applicant.refugee ? applicant.refugee : 0,
			applicant.income ? applicant.income : 0.0,
			applicant.flag ? applicant.flag : 0,
			applicant.address_id,
			applicant.application_id,
			new Date().toISOString(),
			new Date().toISOString(),
			applicant.email,
			applicant.phoneNumber,
			applicant.type,
		]);

		console.info(
			`Applicant with name ${applicant.firstName} inserted in database.`,
		);
	});
};

export const insertApplication = (applicationData) => {
	db.prepare(INSERT_APPLICATION).run([
		applicationData.id,
		applicationData.status,
		applicationData.score,
		new Date().toISOString(),
		new Date().toISOString(),
		applicationData.occupied_property ? "Private" : "Social",
		applicationData.useful_mq,
	]);
	console.info(
		`Application with id ${applicationData.id} inserted in database.`,
	);
};

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
