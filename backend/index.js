import express from 'express';
import applicationsRouter from './routes/applications/applications.js';
import applicantsRouter from './routes/applicants/applicants.js';

const app = express();

// for getting form values
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/applications', applicationsRouter);
app.use('/api/v1/applicants', applicantsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`Server listening on port ${port}...`);
});
