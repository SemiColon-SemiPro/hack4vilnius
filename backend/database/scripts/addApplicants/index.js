import { readApplicants } from "../utils.js";

export const addApplicants = async (database, data) => {
	const applicants = await readApplicants(data);

	const insertApplicants = database.prepare(
		"INSERT INTO applicants (personal_number, first_name, last_name, date_of_birth, disability_level, income, flag, email, phone_number, address_id, application_id, applicant_type, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
	);

	applicants.forEach((applicant) => {
		insertApplicants.run(
			applicant.personalNumber,
			applicant.firstName,
			applicant.lastName,
			applicant.dateOfBirth,
			applicant.disabilityLevel,
			applicant.income,
			applicant.flag,
			applicant.email,
			applicant.phoneNumber,
			applicant.addressId,
			applicant.applicationId,
			applicant.applicantType,
			applicant.createdAt,
			applicant.updatedAt,
		);
	});
};
