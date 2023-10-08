// import { runOnce } from "vitest";
import db from "../../database/index.js";

// queries
const SELECT_HOUSES = "SELECT * FROM houses JOIN addresses ON houses.address_id = addresses.id";
const SELECT_HOUSES_BY_AVAILABILITY =
	"SELECT * FROM houses JOIN addresses ON houses.address_id = addresses.id WHERE available = ?";
const SELECT_HOUSE_BY_ID =
	"SELECT * FROM houses JOIN addresses ON houses.address_id = addresses.id WHERE id = ?";
const UPDATE_HOUSE_AVAILABILITY = `
UPDATE houses
SET available = CASE
  WHEN available = 0 THEN 1
  ELSE 0
END
WHERE id = ?
`;
const SELECT_HOUSES_BY_CAPACITY =
	"SELECT * FROM houses JOIN addresses ON houses.address_id = addresses.id WHERE capacity = ?";

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

export const updateHouseAvailability = (id) => {
	const house = db.prepare(UPDATE_HOUSE_AVAILABILITY).run(id);
	console.debug(`House with id ${id} changed availability: `, house);
	return house;
};

export const getHouseByGroup = (capacity) => {
	const housesList = db.prepare(SELECT_HOUSES_BY_CAPACITY).all(capacity);
	console.debug(`Houses number with capacity ${capacity} retrieved: `, housesList.length);
	return housesList;
};
