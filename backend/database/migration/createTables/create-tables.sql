-- sqlite3 data/database.db < data/create_tables.sql

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY,
  applicant_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  status_id INTEGER NOT NULL,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(applicant_id) REFERENCES applicants(id),
  FOREIGN KEY(type_id) REFERENCES types(id),
  FOREIGN KEY(status_id) REFERENCES statuses(id)
);

CREATE TABLE IF NOT EXISTS applicants (
  id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  middle_name TEXT,
  last_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  score INTEGER,
  address_id INTEGER,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(address_id) REFERENCES addresses(id)
);

CREATE TABLE IF NOT EXISTS houses (
  id INTEGER PRIMARY KEY,
  available INTEGER NOT NULL,
  street TEXT NOT NULL,
  house_number INTEGER NOT NULL,
  flat_number TEXT,
  useful_mq TEXT NOT NULL,
  category TEXT NOT NULL,
  unique_id TEXT NOT NULL,
  assigned_to INTEGER,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(assigned_to) REFERENCES applicants(id)
);

CREATE TABLE IF NOT EXISTS statuses (
  id INTEGER PRIMARY KEY,
  description TEXT UNIQUE NOT NULL,
  created_at TEXT,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS types (
  id INTEGER PRIMARY KEY,
  description TEXT UNIQUE NOT NULL,
  created_at TEXT,
  updated_at TEXT
);

COMMIT;