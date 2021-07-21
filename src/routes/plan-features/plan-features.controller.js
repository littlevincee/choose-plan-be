import express from 'express';
import db from '../../../sequelizer/database/models';

var router = express.Router();

router.get('/all', async (_, res) => {
  const plans = await db.PlanFeatures.findAll({
    where: {},
    attributes: ["PlanId", "FeatureId", "IsActive"],
    include: [{
      model: db.Plans,
      attributes: ["code", "description", "price", "period"],
      where: {}
    }, {
      model: db.Features,
      attributes: ["code", "description"],
      where: {}
    }]
  });
  res.json(plans);
})

export default router;