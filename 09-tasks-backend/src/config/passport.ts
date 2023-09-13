import { Request, Response } from 'express';
import passport from 'passport';
import passportJWT from 'passport-jwt';
const { Strategy, ExtractJwt } = passportJWT;

export default (req: Request, res: Response) => {
  const params = {
    secretOrKey: process.env.AUTH_SECRET,
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
  }
  const db = req.app.locals.db

  const strategy = new Strategy(params, (payload, done) => {
    db('users')
      .where('id', payload.id)
      .first()
      .then(user => done(null, user ? user : false))
      .catch(err => done(err, false))
  })

  passport.use(strategy)

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: false })
  }
}
