let express = require('express');
let app = express();

const api = require('./routes/api.route');

app.use(api);

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}
