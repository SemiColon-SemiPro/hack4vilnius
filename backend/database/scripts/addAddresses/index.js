import { readAddresses } from "../utils.js";

export const addApplicantsAddresses = async (database, data) => {
	const addresses = await readAddresses(data);

	const insertAddresses = database.prepare(
		"INSERT INTO addresses (id, city, district, street, house_number, flat_number, zip_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
	);

	addresses.forEach((address) => {
		insertAddresses.run(
			address.id,
			address.city,
			address.district,
			address.street,
			address.houseNumber,
			address.flatNumber,
			address.zipCode,
			address.createdAt,
			address.updatedAt,
		);
	});
};