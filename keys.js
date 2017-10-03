// ========================================================================================
var Twitter = require('twitter');

//process.env.TWITTER_CONSUMER_KEY only works if keys are in a separate file from the one calling it

const twitterKey = new Twitter({
  consumer_key: "ZQmhXcKkBSY9s74ef190DKr5d",
  consumer_secret: "KvkvJTHDEwG54prROayEbIEGoTe180vF5HmovuwPyNZ3nZsN5K",
  access_token_key: "911364263469449216-Omh09dIRSWCJjj1Pxv8z8stuZg6YYlx",
  access_token_secret: "Fvq0OCbM3XZfP88IRcKP01NVJzfOZMZ4vJncGCYp4CpdN"
});

// var params = {screen_name: 'AmiableQuack'};
// twitterKey.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     for(var i = 0; i < tweets.length; i++) {
//     	console.log(tweets[i].text);
//     }
//   }
//   else {
//   	console.log(error);
//   }
//   console.log("=============");
// });
// ========================================================================================

var Spotify = require('node-spotify-api');
 
const spotifyKey = new Spotify({
  id: "445d281570234890ac6c673b98ef8930",
  secret: "525f023501c14e2c91fd3db6bb4df7c8",
});

// spotifyKey.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// //console.log(JSON.stringify(data, null, 2)); 

// //Artist Name
// console.log(data.tracks.items[0].artists[0].name);

// //Song Name
// console.log(data.tracks.items[0].name);

// //Spotify preview link
// console.log(data.tracks.items[0].external_urls);

// //Album name
// console.log(data.tracks.items[0].album.name)
// });

// // ========================================================================================





module.exports = {
	twitterKey: twitterKey,
	spotifyKey: spotifyKey
};
