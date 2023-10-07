import sqlite from "better-sqlite3";
import createTables from "./migration/createTables/index.js";
import addHousesAndAddresses from "./migration/addHouses/index.js";
import { addApplications } from "./migration/addApplications/index.js";
import { addApplicants } from "./migration/addApplicants/index.js";
import application_applicants_json from "./data/application_data.json" assert { type: "json" };

const createDb = (dbPath) => {
	const db = sqlite(dbPath);
	return db;
};

const db = createDb("./database/database.db");

// add tables if not available
createTables(db);

// add houses if not available
const countOfHouses = db.prepare("SELECT COUNT(*) count FROM houses").get();
console.info(`Total houses in db: ${countOfHouses.count}`);
if (countOfHouses.count == 0) {
	addHousesAndAddresses(db);
}

// add initial applications batch
const countOfApplications = db
	.prepare("SELECT COUNT(*) count FROM applications")
	.get();
console.info(`Total applications in db: ${countOfApplications.count}`);
if (countOfApplications.count == 0) {
	addApplications(db, application_applicants_json);
}

// add initial applicants batch
const countOfApplicants = db
	.prepare("SELECT COUNT(*) count FROM applicants")
	.get();
console.info(`Total applicants in db: ${countOfApplicants.count}`);
if (countOfApplicants.count == 0) {
	addApplicants(db, application_applicants_json);
}

export default db;
