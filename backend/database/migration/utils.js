import fs from "fs/promises";

export const readSqlScript = async (sqlPath) => {
	const sqlFile = await fs.readFile(sqlPath, "utf-8");

	const stmts = sqlFile
		.replace(/--.*\n/g, "")
		.split(";\n")
		.map((statement) => statement.trim())
		.filter(Boolean);

	return stmts;
};

export const readHousesCsv = async (csvPath) => {
	const csvFile = await fs.readFile(csvPath, "utf-8");
	let rawData = csvFile
		.split(",")
		.map((e) => e.trim())
		.map((ele) => ele.split(/\r?\n/g))
		.flat()
		.map((element) => element.trim());

	const housesList = [];

	let counter = 0;
	const numOfHouses = 2880;
	for (let i = 0; i < numOfHouses; i++) {
		const list = [];
		for (let j = 0; j < 7; j++) {
			list.push(rawData[counter]);
			counter++;
		}
		housesList.push(list);
	}

	return housesList;
};
