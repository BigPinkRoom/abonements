const { Router } = require('express');
const router = Router();

const db = require('../configs/db.config');

router.use('/', (req, res) => {
  const sql =
    "INSERT INTO clients (name, surname, secondName, address) VALUES ('List', 'Listov', 'Listvennik', 'Mayskiy')";

  // connection.query(sql, function (error, result) {
  //   if (error) throw error;
  //   console.log('One record registered');
  // });

  res.message = db.query(
    'SELECT * FROM clients',
    function (error, result, fields) {
      if (error) throw error;

      return res.status(201).json(result);
    }
  );
});

module.exports = router;
