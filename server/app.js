var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var songs = [];

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/songs', function(req, res) {
    var song = req.body; //temp variable
    console.log('req.body:', req.body);
    dateAdded(song);
    duplicateSong(song, songs);

    songs.push(song); //!   console.log('req.body:', req.body);
    //var new date = Date
    blankSong(song);
    if (song == null) {
      songs.pop(song);
      res.sendStatus(400);
      console.log(songs);
    }

  });


app.get("/songs", function(req, res) {
    res.send(songs); //what object do i probably need to end data back to the client; sends back our array of songs
});

app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';

    //console.log('What is in req.params[0]?', req.params[0]);
    //console.log('dirname: '.  __dirname);    //undefined
    console.log('path', path.join(__dirname, './public', file));

    res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function() {
    console.log("Server now running at port", app.get('port'))
});

function blankSong(tune) {
    for (var i = 0; i < songs.length; i++) {
        if (tune.title == "" || tune.artist == "") {
            tune == null;
            res.sendStatus(400);
            //return alert("Sorry, no blank entries allows.")
    };
};

};

function duplicateSong(tune, array) {
  for (i = 0; i < array.length; i++) {
      if (array[i].artist == tune.artist && array[i].title == tune.title) {
          tune == null;
          res.sendStatus(400);
      }
  }
}

function dateAdded(tune) {
var d = new Date();
var today = d.toString();
console.log(today);
tune.dateadded = today;
return tune.dateadded;
console.log(tune.dateadded);
}









//client app.js new date
