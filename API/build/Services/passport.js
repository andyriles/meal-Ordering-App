"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _models = _interopRequireDefault(require("../models"));

var _key = _interopRequireDefault(require("../config/key"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models.default.User;
var LocalOption = {
  usernameField: 'email'
};
var localLogin = new _passportLocal.default(LocalOption, function (email, password, done) {
  User.findOne({
    where: {
      email: email
    }
  }).then(function (user) {
    if (!user) {
      done(null, false);
    } else {
      var hash = user.password;

      _bcryptjs.default.compare(password, hash, function (err, res) {
        // res === true
        if (res === false) {
          done(null, false);
        } else {
          done(null, user);
        }
      });
    }
  }).catch(function (error) {
    return done(null, error);
  });
});
var JwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromHeader('authorization'),
  secretOrKey: _key.default.secret
};
var JwtLogin = new _passportJwt.Strategy(JwtOptions, function (payload, done) {
  //check if user id exists in the db
  User.findById(payload.sub).then(function (user) {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  }).catch(function (error) {
    return done(null, error);
  });
});

_passport.default.use(JwtLogin);

_passport.default.use(localLogin);