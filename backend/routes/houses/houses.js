import { Router } from 'express';
import db from '../../database/index.js';

const housesRouter = Router();

const houses = {
  houses: [
    { id: 0, address: 'Address', available: true },
    { id: 1, address: 'Address 1', available: false },
    { id: 2, address: 'Address 2', available: false },
  ],
  error: {
    code: 404,
    message: 'House not found',
  },
};

housesRouter.route('/').get((req, res) => {
  if (houses.houses.length > 0) {
    res.send(houses.houses);
  } else {
    res.send(houses.error);
  }
});

housesRouter.route('/:id').get((req, res) => {
  const found_house = houses.houses[parseInt(req.params.id)];
  if (found_house) {
    res.send(found_house);
  } else {
    res.send(houses.error);
  }
});

export default housesRouter;
