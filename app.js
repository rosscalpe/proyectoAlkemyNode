const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();

const personajesRouter = require('./src/routes/personajesRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const peliculasRouter = require('./src/routes/peliculasRoutes');


app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "It's secret",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());


app.use ('/auth', loginRouter);
app.use ('/characters', personajesRouter);
app.use ('/movies', peliculasRouter);


app.listen (3000, () => {
    console.log('servidor corriendo, Host 3000')
})