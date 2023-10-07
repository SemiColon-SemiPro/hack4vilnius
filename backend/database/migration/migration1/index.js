import { readSqlScript } from "../utils.js";

const alterApplications = async (database) => {
	const alterQuery = await readSqlScript(
		"./database/migration/migration1/migration1.sql",
	);
	alterQuery.forEach((stmt) => database.exec(stmt));
	console.info("Migration1 completed.");
};

export default alterApplications;
