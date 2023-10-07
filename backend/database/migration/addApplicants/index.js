import { readApplicants } from "../utils.js";

export const addApplicants = async (database, data) => {
	const applicants = await readApplicants(data);

	const insertApplicants = database.prepare(
		"INSERT INTO applicants (id, first_name, middle_name, last_name, age, disability_level, refugee, income, flag, address_id, application_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
	);

	applicants.forEach((applicant) => {
		insertApplicants.run(
			applicant.id,
			applicant.first_name,
			applicant.middle_name,
			applicant.last_name,
			applicant.age,
			applicant.disability_level,
			applicant.refugee,
			applicant.income,
			applicant.flag,
			applicant.address_id,
			applicant.application_id,
			applicant.created_at,
			applicant.updated_at,
		);
	});
};
