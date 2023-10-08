import { readSqlScript } from "../utils.js";

const migration3 = async (database) => {
	const alterQuery = await readSqlScript(
		"./database/migration/migration3/migration3.sql",
	);
	alterQuery.forEach((stmt) => database.exec(stmt));
	console.info("Migration3 completed.");
};

export default migration3;
