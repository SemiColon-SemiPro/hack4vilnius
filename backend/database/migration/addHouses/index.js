import { readHousesCsv } from '../utils.js';

const addHouses = async database => {
  const houses = await readHousesCsv(
    '../backend/database/data/available_houses.csv'
  );

  const insert = database.prepare(
    'INSERT INTO houses (available, street, house_number, flat_number, useful_mq, category, unique_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
  );

  houses.forEach(house => {
    insert.run(
      1,
      house[0],
      house[1],
      house[2],
      house[3],
      house[4],
      house[5],
      new Date().toISOString(),
      new Date().toISOString()
    );
  });
};

export default addHouses;
