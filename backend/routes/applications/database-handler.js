import db from '../../database/index.js';

// queries
const SELECT_APPLICAITONS = 'SELECT * FROM applications';
const SELECT_APPLICATION_BY_ID = 'SELECT * FROM applications WHERE id = ?';

// functions
export const getApplications = () => {
  const applications = db.prepare(SELECT_APPLICAITONS).all();
  console.debug('Number of applications retrieved: ', applications.length);
  return applications;
};

export const getApplicationById = id => {
  const application = db.prepare(SELECT_APPLICATION_BY_ID).get(id);
  console.debug(`Application with id ${id} retrieved: `, application);
  return application;
};
