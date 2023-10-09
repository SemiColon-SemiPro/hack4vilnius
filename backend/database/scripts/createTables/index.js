import { readSqlScript } from "../utils.js";

const createTables = async (database) => {
	const createTablesSql = await readSqlScript(
		"./database/scripts/createTables/create-tables.sql",
	);
	createTablesSql.forEach((stmt) => database.exec(stmt));
};

export default createTables;
