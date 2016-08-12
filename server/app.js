var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var songs = [];


app.set('port', process.env.PORT || 3000);



        app.use(bodyParser.urlencoded({ extended: true }));

        app.post('/songs', function(req, res) {
            var song = req.body; //temp variable
            console.log(song);
            console.log(songs);
            songs.push(song); //!   console.log('req.body:', req.body);
            console.log(song);
            console.log(songs);
            //var new date = Date
            // blankSong();
            // duplicateSong();


            //if there are emtpy fields, or the song has already been entered, error, else push to array

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


        // function blankSong() {
        //     for (var i = 0; i < songs.length; i++) {
        //         if (song.title !== "" || song.artist !== "") {
        //             return song;
        //         } else {
        //             song == null;
        //         };
        //     };
        // };
        //
        //
        // function duplicateSong() {
        //
        //     for (var i = 0; i < songs.length; i++) {
        //
        //         if (song == null) {
        //             return song;
        //             console.log(res.sendStatus(400));
        //         } else {
        //             return console.log(res.sendStatus(200));
        //         };
        //     };
        // };
