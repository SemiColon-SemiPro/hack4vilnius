const addCapacity = (db) => {
	const houses = db.prepare("SELECT * FROM houses").all();
	const updateCapacity = db.prepare(
		"UPDATE houses SET capacity=? WHERE id=?",
	);
	houses.forEach((house) => {
		const capacity = Math.floor(parseFloat(house.useful_mq) / 10);
		updateCapacity.run(capacity, house.id);
	});
};

export default addCapacity;
