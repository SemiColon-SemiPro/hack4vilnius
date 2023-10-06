-- sqlite3 data/database.db < data/create_tables.sql

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY,
  applicant_id INTEGER NOT NULL,
  status TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(applicant_id) REFERENCES applicants(id)
);

CREATE TABLE IF NOT EXISTS applicants (
  id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  middle_name TEXT,
  last_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  family_size INTEGER,
  disability_level INTEGER,
  refugee INTEGER,
  financial_bracket INTEGER,
  priority INTEGER,
  eligible INTEGER,
  address_id INTEGER,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(address_id) REFERENCES addresses(id)
);

CREATE TABLE IF NOT EXISTS houses (
  id INTEGER PRIMARY KEY,
  available INTEGER NOT NULL,
  useful_mq TEXT NOT NULL,
  category TEXT NOT NULL,
  capacity INTEGER,
  unique_id TEXT NOT NULL,
  floor INTEGER,
  rooms_number INTEGER,
  elevator INTEGER,
  assigned_to INTEGER,
  address_id INTEGER,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(assigned_to) REFERENCES applicants(id),
  FOREIGN KEY(address_id) REFERENCES addresses(id)
);

CREATE TABLE IF NOT EXISTS addresses (
  id INTEGER PRIMARY KEY,
  city TEXT,
  district TEXT NOT NULL,
  street TEXT NOT NULL,
  house_number TEXT NOT NULL,
  flat_number TEXT,
  zip TEXT,
  created_at TEXT,
  updated_at TEXT
);

COMMIT;