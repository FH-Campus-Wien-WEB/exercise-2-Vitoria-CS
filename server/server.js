const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movies = require('./movie-model.js');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// GET all movies
app.get('/movies', function (req, res) {
  res.json(Object.values(movies));
});

// GET one specific movie
app.get('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID;
  const movie = movies[imdbID];

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});

// PUT update or create movie
app.put('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID;
  const movieData = req.body;

  if (movies[imdbID]) {
    movies[imdbID] = movieData;
    res.sendStatus(200);
  } else {
    movies[imdbID] = movieData;
    res.status(201).json(movieData);
  }
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");