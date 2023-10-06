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
  address_id INTEGER NOT NULL,
  assigned_to INTEGER,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(address_id) REFERENCES addresses(id),
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


CREATE TABLE IF NOT EXISTS addresses (
  id INTEGER PRIMARY KEY,
  street TEXT UNIQUE NOT NULL,
  house_number INTEGER,
  flat_number TEXT,
  zip TEXT NOT NULL,
  created_at TEXT,
  updated_at TEXT
);

COMMIT;