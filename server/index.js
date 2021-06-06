const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const api = require('./routes/api.route');
// const admin = require('./routes/admin.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'testSecretKey',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api', api);
// app.use('/admin', admin);

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}
