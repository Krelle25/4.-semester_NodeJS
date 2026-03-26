import express from 'express';

const app = express();


import helmet from 'helmet';
app.use(helmet());


import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);


// /{*splat} is the new syntax in Express 5.x, before it was just /*
app.get('/{*splat}', (req, res) => {
    res.send(`<div>
                <h1>404</h1>
                <h3>Page - ${req.path} - doesn't exist</h3>
            </div>`
    );
});

app.all('/{*splat}', (req, res)  => {
    res.send({ errorMessage: `The route for ${req.path} and the HTTP method ${req.method} does not exist` });
});

// Nullish coaelescing operator ??
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
