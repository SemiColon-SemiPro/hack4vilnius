import sqlite from 'better-sqlite3';
import fs from 'fs/promises';

const readSqlScript = async sqlPath => {
  const sqlFile = await fs.readFile(sqlPath, 'utf-8');

  const stmts = sqlFile
    .replace(/--.*\n/g, '')
    .split(';\n')
    .map(statement => statement.trim())
    .filter(Boolean);

  return stmts;
};

const createDb = dbPath => {
  const db = sqlite(dbPath);
  return db;
};

const createTables = async database => {
  const createTablesSql = await readSqlScript(
    './database/migration/create-tables.sql'
  );
  createTablesSql.forEach(stmt => database.exec(stmt));
};

const db = createDb('./database/database.db');
createTables(db);

export default db;
