import { readHousesCsv } from "../utils.js";

const addHousesAndAddresses = async (database) => {
	const houses = await readHousesCsv(
		"../backend/database/data/available_houses.csv",
	);

	const insertHouse = database.prepare(
		"INSERT INTO houses (id, available, useful_mq, category, address_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
	);

	const insertAddress = database.prepare(
		"INSERT INTO addresses (city, district, street, house_number, flat_number, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
	);

	let counter = 1;

	for (let i = 1; i < houses.length; i++) {
		const house = houses[i];

		insertAddress.run(
			"Vilnius",
			house[0],
			house[1],
			house[2],
			house[3],
			new Date().toISOString(),
			new Date().toISOString(),
		);

		insertHouse.run(
			house[6],
			1,
			house[4],
			house[5],
			counter,
			new Date().toISOString(),
			new Date().toISOString(),
		);
		counter++;
	}
};

export default addHousesAndAddresses;
