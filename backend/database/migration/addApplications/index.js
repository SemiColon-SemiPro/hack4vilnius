import { readApplications } from "../utils.js";

export const addApplications = async (database, data) => {
	const applications = await readApplications(data);

	const insertApplications = database.prepare(
		"INSERT INTO applications (id, status, score, occupied_property, useful_mq, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
	);

	applications.forEach((application) => {
		// console.log(application);
		insertApplications.run(
			application.id,
			application.status,
			application.score,
			application.occupiedProperty,
			application.usefulMq,
			application.createdAt,
			application.updatedAt,
		);
	});
};
