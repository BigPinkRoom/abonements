const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = {
  id: 1,
  email: 'email@email.ru',
  password: '12345',
};

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user = userDB.id === id ? userDB.id : false;

  done(null, user.id);
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});
