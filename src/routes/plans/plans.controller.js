import express from 'express';
import db from '../../../sequelizer/database/models';

var router = express.Router();


router.get('/all', async (_, res) => {
  const plans = await db.Plans.findAll({
    where: {},
    attributes: ["id", "code", "description", "price", "period"],
  });
  res.json(plans);
})


export default router;