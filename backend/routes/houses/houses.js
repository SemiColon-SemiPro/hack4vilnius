import { Router } from 'express';
import { getHouses, getHouseById } from './database-handler.js';

const housesRouter = Router();

housesRouter.route('/').get((req, res) => {
  const housesList = getHouses();
<<<<<<< HEAD
  const dataRes = {
    houses: [],
  };
  dataRes.houses = housesList;

  res.send(dataRes);
=======
  res.status(200).json({ houses: housesList });
>>>>>>> b47edc95baff821e6335cce8873b8333068f7c60
});

housesRouter.route('/:id').get((req, res) => {
  const id = parseInt(req.params.id);
  res.send(getHouseById(id));
});

export default housesRouter;
