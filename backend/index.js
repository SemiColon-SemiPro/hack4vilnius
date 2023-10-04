import express from 'express';
import router from './routes/applications.js';


const app = express();

// for getting form values
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const appRouter = router;
app.use('/api/v1/applications', appRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`Server listening on port ${port}...`);
});
