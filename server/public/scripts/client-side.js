$(document).ready(function() {
    getSongs();


    $('#song-form').on('submit', function(event) {
        event.preventDefault(); //1. submits to the server 2. clears the form
        console.log("I've been clicked");
        var song = {}; //we will store our song here



        $.each($('#song-form').serializeArray(), function(i, field) {
            song[field.name] = field.value; //getting name and making it a property of song (should happen twice, once for title, once for artist)
        });




        $('#song-list').append('<div>' + song.title + "-" + song.artist  + song.dateadded +  "</div>"); //song objects
        console.log('song submitted is', song);


        $.ajax({
            type: 'POST',
            url: '/songs',
            data: song,
            success: function(response) {
                console.log('POST /songs works!');
                getSongs();
            },

            error: function(response) {
                console.log('Attempted POST /songs, did not work');
            }
        });
    });

});

function getSongs() {
    $.ajax({
        type: 'GET',
        url: '/songs',
        success: function(songs) {
           $('#song-list').empty();
            songs.forEach(function(song) {
                $("#song-list").append('<div>' + song.title + "-" + song.artist + "   " + song.dateadded +  "</div>");
                console.log(songs);
            });
        },

        error: function() {
            console.log('GET /songs did not work');
        },


    });
};
