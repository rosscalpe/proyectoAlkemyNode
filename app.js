const express = require('express');
const port = 3000;
const app = express();

const personajesRouter = require('./src/routes/personajesRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const peliculasRouter = require('./src/routes/peliculasRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use ('/auth', loginRouter);
app.use ('/characters', personajesRouter);
app.use ('/movies', peliculasRouter);
app.use("/*", (req, res) => {
    res.status(404).json({ 
      status:404,
      error: "Not found page"
    });
  });

app.listen (port, () => {
     console.log(`servidor corriendo, Host ${ port }`)
})