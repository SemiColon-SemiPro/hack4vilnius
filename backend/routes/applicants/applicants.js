import { Router } from 'express';
import db from '../../data/index.js';

const applicantsRouter = Router();

applicantsRouter.route('/').get((req, res) => {
  res.send('applicants list');
});

export default applicantsRouter;
