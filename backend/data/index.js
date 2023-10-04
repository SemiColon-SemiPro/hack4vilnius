import sqlite from 'better-sqlite3';

const db = sqlite('data/applications.db');

export default db;
