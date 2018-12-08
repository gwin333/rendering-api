/*
*  Write a server that will respond with the appropriate JSON blob
*  for the given rendering
*/
var express = require('express') // pull in Express module
var app = express() // make an Express server object

var albums = require('./abstractions/albums.js')
var circles = require('./abstractions/circles.js')
var movies = require('./abstractions/movies.js')
var nameTags = require('./abstractions/nameTags.js')
var poker = require('./abstractions/poker.js')
var rectangle = require('./abstractions/rectangle.js')
var restaurants = require('./abstractions/restaurants.js')
var students = require('./abstractions/students.js')
var surveys = require('./abstractions/surveys.js')
var tweets = require('./abstractions/tweets.js')


app.use(express.static(__dirname + '/public'))

// GET /api/albums
// app.use(function (req, res, nextFn) {
//   console.info('Somebody is talking to me!')
//   nextFn()
// })

// GET /api/albums
app.get('/api/albums', function (req, res, nextFn) {
  res.send(albums)
})

// GET /api/circles
app.get('/api/circles', function (req, res, nextFn) {
  res.send(circles)
})

// GET /api/movies
app.get('/api/movies', function (req, res, nextFn){
  res.send(movies)
})

// GET /api/nametags
app.get('/api/nametags', function (req, res, nextFn) {
  res.send(nameTags)
})

// GET /api/poker
app.get('/api/poker', function (req, res, nextFn) {
  res.send(poker)
})

// GET /api/rectangle
app.get('/api/rectangle', function (req, res, nextFn) {
  res.send(rectangle)
})

// GET /api/restaurants


// GET /api/students

// GET /api/surveys

// GET /api/tweets

app.listen(3000, function () {
  console.log('rendering-api is now listening on port 3000...')
})
