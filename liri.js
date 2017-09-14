var keys = require('./key');

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

var fs = require("fs");

// constructor
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,
});


if (process.argv[2] === 'my-tweets') {

    var params = { screen_name: 'jeanelleliri' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i <= 20; i++) {
            console.log("Tweet: " + tweets[i].text);
            }
        }
    })
}

if (process.argv[2] === 'spotify-this-song') {

    var spotify = new Spotify({
        id: keys.spotifyfKeys.id,
        secret: keys.spotifyfKeys.secret,
      });
       
      spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log('Artist: ' + data.tracks.items[0].artists[0].name); 
      console.log('Song: ' + data.tracks.items[0].name); 
      console.log('Preview: ' + data.tracks.items[0].external_urls.spotify); 
      console.log('Album: ' + data.tracks.items[0].album.name); 
      
      })
};

 if (process.argv[2] === 'movie-this') {

}

