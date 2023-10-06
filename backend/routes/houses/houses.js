import { Router } from 'express';
import { getHouses, getHouseById } from './database-handler.js';

const housesRouter = Router();

housesRouter.route('/').get((req, res) => {
  res.send(getHouses());
});

housesRouter.route('/:id').get((req, res) => {
  const id = parseInt(req.params.id);
  res.send(getHouseById(id));
});

export default housesRouter;
