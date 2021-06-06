const { Router } = require('express');
const router = Router();

router.use('/', (req, res) => {
  console.log(res);
});
