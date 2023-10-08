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
	"INSERT INTO applicants (personal_number, first_name, last_name, date_of_birth, disability_level, income, flag, address_id, application_id, created_at, updated_at, email, phone_number, applicant_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
const INSERT_ADDRESS =
	"INSERT INTO addresses (city, district, street, house_number, flat_number, zip_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const SELECT_ADDRESS_ID =
	"SELECT id FROM addresses WHERE street = ? AND house_number = ? AND created_at = ?";

// functions
export const getAddressId = (addressData, timestamp) => {
	const id = db
		.prepare(SELECT_ADDRESS_ID)
		.get([addressData.street, addressData.houseNumber, timestamp]);

	return id;
};

export const insertAddress = async (addressData) => {
	const timestamp = new Date().toISOString();
	const stmt = db.prepare(INSERT_ADDRESS);
	stmt.run([
		addressData.city,
		addressData.district,
		addressData.street,
		addressData.houseNumber,
		addressData.flatNumber,
		addressData.zipCode,
		timestamp,
		timestamp,
	]);
	console.info(`Address entered in database.`);
	return timestamp;
};

export const insertApplicants = async (
	applicationId,
	addressId,
	applicantsData,
) => {
	const timestamp = new Date().toISOString();
	applicantsData.forEach((applicant) => {
		const stmt = db.prepare(INSERT_APPLICANT);
		stmt.run([
			applicant.personalNumber,
			applicant.firstName,
			applicant.lastName,
			applicant.dateOfBirth,
			applicant.disabilityLevel ? applicant.disabilityLevel : 0,
			applicant.income ? applicant.income : 0.0,
			applicant.flag ? applicant.flag : 0,
			addressId.id,
			applicationId,
			timestamp,
			timestamp,
			applicant.email ? applicant.email : null,
			applicant.phoneNumber ? applicant.phoneNumber : null,
			applicant.type,
		]);

		console.info(
			`Applicant with name ${applicant.firstName} inserted in database.`,
		);
	});
};

export const insertApplication = async (applicationData) => {
	const timestamp = new Date().toISOString();
	db.prepare(INSERT_APPLICATION).run([
		applicationData.id,
		applicationData.status,
		applicationData.score,
		timestamp,
		timestamp,
		applicationData.occupied_property ? "Private" : "Social",
		applicationData.useful_mq,
	]);
	console.info(
		`Application with id ${applicationData.id} inserted in database.`,
	);
};

export const getApplications = async () => {
	const applications = db.prepare(SELECT_APPLICAITONS).all();
	console.debug("Number of applications retrieved: ", applications.length);
	return applications;
};

export const getApplicationById = async (id) => {
	const application = db.prepare(SELECT_APPLICATION_BY_ID).get(id);
	console.debug(`Application with id ${id} retrieved: `, application);
	return application;
};

export const getNumberOfApplicants = async (num) => {
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
