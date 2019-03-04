import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';

import Model from '../models';
import config from '../config/key';

const { User } = Model;

const LocalOption = { usernameField: 'email' };

const localLogin = new LocalStrategy(LocalOption, (email, password, done) => {
    User.findOne({ where: { email } })
        .then((user) => {
            if (!user) {
                done(null, false);
            } else {
                const hash = user.password;
                bcrypt.compare(password, hash, (err, res) => {
                    // res === true
                    if (res === false) {
                        done(null, false);
                    } else {
                        done(null, user);
                    }
                });
            }
        })
        .catch((error) => done(null, error));
});

const JwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret,
};

const JwtLogin = new Strategy(JwtOptions, (payload, done) => {
    //check if user id exists in the db
    User.findById(payload.sub)
        .then((user) => {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
        .catch((error) => done(null, error));
});

passport.use(JwtLogin);
passport.use(localLogin);