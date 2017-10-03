//
const Twitter=require("twitter");
const request=require('request');
const twitterKey=require("./keys.js").twitterKey;
const spotifyKey=require("./keys.js").spotifyKey;
const fs=require('file-system');
const Spotify=require("node-spotify-api");
const client = new Twitter(twitterKey);

var command = process.argv[2];

function userFunction() {
	var string = "";
	for(var i = 3; i < process.argv.length; i++) {
		string += process.argv[i] + " ";
	}
	return string.trim();
};

function runLiri(command, func) {
	switch(command) {
		case "my-tweets":
			console.log("in switch");
			var params = {screen_name: 'AmiableQuack'};
			twitterKey.get('statuses/user_timeline', params, function(error, tweets, response) {
			  if (!error) {
			  	console.log("Here Are My Tweets!");
			    for(var i = 0; i < tweets.length; i++) {
			    	console.log("Tweet " + (i+1) + ": " + tweets[i].text);
			    }
			  }
			  else {
			  	console.log(error);
			  }
			});
		break;
		// ===================================================================
		case "spotify-this-song":
			spotifyKey.search({ type: 'track', query: func }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			 
			//console.log(JSON.stringify(data, null, 2)); 

			//Artist Name
			console.log('\x1b[31m', 'Artist: ' + data.tracks.items[0].artists[0].name);

			//Song Name
			console.log("\x1b[32m", "Song Name: " + data.tracks.items[0].name);

			//Spotify preview link
			console.log("\x1b[33m", data.tracks.items[0].external_urls);

			//Album name
			console.log("\x1b[30m", "Album: " + data.tracks.items[0].album.name)
			});
		break;
		// ===================================================================
		case "movie-this":
			var request = require('request');
			let movie = func;
			console.log(movie);
			request('http://www.omdbapi.com/?apikey=40e9cece&t=' + movie, function (error, response, body) {
			  // console.log('error:', error); // Print the error if one occurred
			  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			  var answer = JSON.parse(body, null, 2);
			  console.log("Title: " + answer.Title);
			  console.log("Year: " + answer.Year);
			  console.log("IMDB: " + answer.Ratings[0].Value);
			  console.log("Rotten Tomatoes: " + answer.Ratings[1].Value);
			  console.log("Country: " + answer.Country);
			  console.log("Language: " + answer.Language);
			  console.log("Plot: " + answer.Plot);
			  console.log("Actors: " + answer.Actors);
			  console.log("============");
			});
		break;
		// ===================================================================
	}
}




runLiri(command, userFunction());