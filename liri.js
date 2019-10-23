require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
// var axios = require("axios");
// var moment = require("moment");
// var fs = require("fs");


var spotify = new Spotify(keys.spotify);

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var getArtistNames = function (artist) {
  return artist.name;
}

var getMeSpotify = function (songName) {

  spotify.search({
    type: 'track',
    query: songName
  }, function (err, data) {
    if (err) {
      console.log('Error occured: ' + err);
      return;
    }
    var songs = data.tacks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s): " + songs[i].artists.map(
        getArtistsNames));
      console.log("song name: " + songs[i].name);
      console.log("preview song: " + songs[i].preview_url);
      console.log("album: " + songs[i].album.name);
      console.log("----------------------------------");
    }
  });

}

var pick = function (caseData, functionData) {
    switch (caseData) {
      case 'spotify-this-song':
        getMeSpotify(functionData);
        break;
      default:
        console.log("Liri does not know that");
    } {

      var runThis = function (argOne, argTwo) {
        pick(argOne, argTwo);
      };

      runThis(process.argv[2], process.argv[3])