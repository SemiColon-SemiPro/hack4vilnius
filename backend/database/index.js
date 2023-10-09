import sqlite from "better-sqlite3";
import createTables from "./scripts/createTables/index.js";
import addHousesAndAddresses from "./scripts/addHouses/index.js";
import { addApplications } from "./scripts/addApplications/index.js";
import { addApplicants } from "./scripts/addApplicants/index.js";
import { addApplicantsAddresses } from "./scripts/addAddresses/index.js";
import sample_data from "./data/application_samples.json" assert { type: "json" };
import addCapacity from "./scripts/addCapacity/index.js";

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
	addApplications(db, sample_data);
}

// add initial applicants' addresses batch
const countOfAddresses = db
	.prepare("SELECT COUNT(*) count FROM addresses")
	.get();
console.info(`Total addresses in db: ${countOfAddresses.count}`);
if (countOfAddresses.count < 2880) {
	addApplicantsAddresses(db, sample_data);
}

// add initial applicants batch
const countOfApplicants = db
	.prepare("SELECT COUNT(*) count FROM applicants")
	.get();
console.info(`Total applicants in db: ${countOfApplicants.count}`);
if (countOfApplicants.count == 0) {
	addApplicants(db, sample_data);
}

// add capacity to houses
const countOfNullCapacities = await db
	.prepare("SELECT COUNT(*) count FROM houses WHERE capacity IS NULL")
	.get();
console.info(`Total null capacities in db: ${countOfNullCapacities.count}`);
if (countOfNullCapacities.count > 0) {
	addCapacity(db);
}

export default db;
