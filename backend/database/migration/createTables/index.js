import { readSqlScript } from '../utils.js';

const createTables = async database => {
  const createTablesSql = await readSqlScript(
    './database/migration/createTables/create-tables.sql'
  );
  createTablesSql.forEach(stmt => database.exec(stmt));
};

export default createTables;
