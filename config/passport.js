import PassportLocalStrategy from 'passport-local';
import passport from 'passport';


let LocalStrategy = PassportLocalStrategy.Strategy;

const passportLocal = () => {
    passport.deserializeUser((uuid, done) => {
        //Deserialize user
    });

    passport.serializeUser((user, done) => {
        //Serialize User
    })


    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        //Add Logic here
    }))
}

export default passportLocal;