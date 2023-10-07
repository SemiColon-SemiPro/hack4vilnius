import db from "../../database/index.js";

// queries
const SELECT_HOUSES = "SELECT * FROM houses";
const SELECT_HOUSES_BY_AVAILABILITY =
	"SELECT * FROM houses WHERE available = ?";
const SELECT_HOUSE_BY_ID = "SELECT * FROM houses WHERE id = ?";

// functions
export const getHouses = () => {
	const houses = db.prepare(SELECT_HOUSES).all();
	console.debug("Houses retrieved: ", houses.length);
	return houses;
};

export const getAvailableHouses = () => {
	const availableHouses = db.prepare(SELECT_HOUSES_BY_AVAILABILITY).all(1);
	console.debug("Available houses retrieved: ", availableHouses.length);
	return availableHouses;
};

export const getUnavailableHouses = () => {
	const unavailableHouses = db.prepare(SELECT_HOUSES_BY_AVAILABILITY).all(0);
	console.debug("Unavailable houses retrieved: ", unavailableHouses.length);
	return unavailableHouses;
};

export const getHouseById = (id) => {
	const house = db.prepare(SELECT_HOUSE_BY_ID).get(id);
	console.debug(`House with id ${id} retrieved: `, house);
	return house;
};
