import express from 'express';
import passport from 'passport';
import passportConfig from './config/passport';
import cors from 'cors';
import { config } from 'dotenv';
config();
import expressConfig from './config/express';
const port = process.env.PORT || 4003;
const app = express();

app.use(cors());
passportConfig();

app.use(passport.initialize());
app.use(passport.session());

expressConfig(app);

app.listen(port);
console.log(`Application started on port ${port}`);

export default app;