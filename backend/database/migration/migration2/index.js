import { readSqlScript } from "../utils.js";

const alterApplicants = async (database) => {
	const alterQuery = await readSqlScript(
		"./database/migration/migration2/migration2.sql",
	);
	alterQuery.forEach((stmt) => database.exec(stmt));
	console.info("Migration2 completed.");
};

export default alterApplicants;
