import 'dotenv/config';

import express from 'express';

const app = express();


import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

import restaurantsRouter from './routers/restaurantsRouter.js';
app.use(restaurantsRouter);
import visitorsRouter from './routers/visitorsRouter.js';
app.use(visitorsRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});