import sqlite from "better-sqlite3";
import createTables from "./migration/createTables/index.js";
import addHousesAndAddresses from "./migration/addHouses/index.js";

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

const db = createDb('./database/database.db')

// add tables if not available
createTables(db)

// add houses if not available
const countOfHouses = db.prepare('SELECT COUNT(*) count FROM houses').get()
console.info(`Total houses in db: ${countOfHouses.count}`)
if (countOfHouses.count == 0) {
    addHouses(db)
}

const db = createDb('./database/database.db')
createTables(db)

export default db
