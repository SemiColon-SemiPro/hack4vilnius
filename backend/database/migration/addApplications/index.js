import { readApplications } from "../utils.js";

export const addApplications = async (database, data) => {
	const applications = await readApplications(data);

	const insertApplications = database.prepare(
		"INSERT INTO applications (id, status, score, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
	);

	applications.forEach((application) => {
		// console.log(application);
		insertApplications.run(
			application.id,
			application.status,
			application.score,
			application.created_at,
			application.updated_at,
		);
	});
};
