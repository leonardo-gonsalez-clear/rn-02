import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { db2 } from './db';
import "dotenv/config"
import "reflect-metadata"

const params: StrategyOptions = {
  secretOrKey: process.env.AUTH_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

const db = db2

const strategy = new Strategy(params, (payload, done) => {
  db('users')
    .where('id', payload.id)
    .first()
    .then(user => done(null, user ? user : false))
    .catch(err => done(err, false))
})

// db('users').where('id', 1).first().then(console.log).catch(console.log)

passport.use(strategy)

const pass = {
  initialize: () => passport.initialize(),
  authenticate: () =>
    passport.authenticate("jwt", { session: false })
}

export default pass
