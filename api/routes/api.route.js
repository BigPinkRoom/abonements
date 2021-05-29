const { Router } = require('express');

const router = Router();

router.use('/api', (req, res) => {
  res.end('test api...');
});

module.exports = router;
