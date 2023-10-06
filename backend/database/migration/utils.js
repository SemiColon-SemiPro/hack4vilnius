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

export default readSqlScript;
