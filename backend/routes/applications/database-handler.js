import db from '../../database/index.js';

// queries
const SELECT_APPLICAITONS = 'SELECT * FROM applications';
const SELECT_APPLICATION_BY_ID = 'SELECT * FROM applications WHERE id = ?';

// functions
export const getApplications = () => {
  db.exec(SELECT_APPLICAITONS);
};

export const getApplicationById = id => {
  db.prepare(SELECT_APPLICATION_BY_ID).get(id);
};
