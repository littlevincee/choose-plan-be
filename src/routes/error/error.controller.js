import express from 'express';

var router = express.Router();

router.get('*', (_, res) => {
  res.status(404).send('Sorry, not found!')
})

export default router;