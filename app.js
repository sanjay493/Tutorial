var express = require('express');

var app=express();

app.set('view engine','ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//router

//home
app.get('/',routes.home);
//Movies
app.get('/star_wars_episode/:episode_number?',routes.movie_single);
//wildcard
app.get('*',routes.movie_notFound);
app.listen(process.env.PORT || 3000);