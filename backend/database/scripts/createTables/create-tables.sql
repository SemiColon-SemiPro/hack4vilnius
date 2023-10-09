-- sqlite3 data/database.db < data/create_tables.sql

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS applications (
  id TEXT UNIQUE PRIMARY KEY,
  status TEXT NOT NULL,
  score INTEGER NOT NULL,
  occupied_property TEXT,
  useful_mq INTEGER,
  assigned_house_id TEXT,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(assigned_house_id) REFERENCES houses(id)
);

CREATE TABLE IF NOT EXISTS applicants (
  personal_number TEXT UNIQUE PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  disability_level INTEGER,
  income INTEGER,
  flag INTEGER,
  email TEXT,
  phone_number TEXT,
  applicant_type TEXT,
  address_id INTEGER,
  application_id TEXT,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(application_id) REFERENCES applications(id),
  FOREIGN KEY(address_id) REFERENCES addresses(id)
);

CREATE TABLE IF NOT EXISTS houses (
  id TEXT UNIQUE PRIMARY KEY,
  available INTEGER NOT NULL,
  useful_mq TEXT NOT NULL,
  category TEXT NOT NULL,
  capacity INTEGER,
  floor INTEGER,
  rooms_number INTEGER,
  elevator INTEGER,
  address_id INTEGER,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY(address_id) REFERENCES addresses(id)
);

CREATE TABLE IF NOT EXISTS addresses (
  id INTEGER PRIMARY KEY,
  city TEXT,
  district TEXT NOT NULL,
  street TEXT NOT NULL,
  house_number TEXT NOT NULL,
  flat_number TEXT,
  zip_code TEXT,
  created_at TEXT,
  updated_at TEXT
);

COMMIT;