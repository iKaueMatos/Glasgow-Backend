import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo ao Glasgow API!');
});

export default router;
