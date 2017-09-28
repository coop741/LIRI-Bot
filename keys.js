// ========================================================================================
var Twitter = require('twitter');

//process.env.TWITTER_CONSUMER_KEY only works if keys are in a separate file from the one calling it

var client = new Twitter({
  consumer_key: "ZQmhXcKkBSY9s74ef190DKr5d",
  consumer_secret: "KvkvJTHDEwG54prROayEbIEGoTe180vF5HmovuwPyNZ3nZsN5K",
  access_token_key: "911364263469449216-Omh09dIRSWCJjj1Pxv8z8stuZg6YYlx",
  access_token_secret: "Fvq0OCbM3XZfP88IRcKP01NVJzfOZMZ4vJncGCYp4CpdN"
});

var params = {screen_name: 'AmiableQuack'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(var i = 0; i < tweets.length; i++) {
    	console.log(tweets[i].text);
    }
  }
  else {
  	console.log(error);
  }
  console.log("=============");
});
// ========================================================================================

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "445d281570234890ac6c673b98ef8930",
  secret: "525f023501c14e2c91fd3db6bb4df7c8",
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
//console.log(JSON.stringify(data, null, 2)); 

//Artist Name
console.log(data.tracks.items[0].artists[0].name);

//Song Name
console.log(data.tracks.items[0].name);

//Spotify preview link
console.log(data.tracks.items[0].external_urls);

//Album name
console.log(data.tracks.items[0].album.name)
});

// ========================================================================================



var request = require('request');
request('http://www.omdbapi.com/?apikey=40e9cece&t=Mr. Nobody&', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
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


   // * Title of the movie.
   // * Year the movie came out.
   // * IMDB Rating of the movie.
   // * Rotten Tomatoes Rating of the movie.
   // * Country where the movie was produced.
   // * Language of the movie.
   // * Plot of the movie.
   // * Actors in the movie.


// ========================================================================================


/*MacBook-Pro-3:homework Coop741$ node keys.js 
Release The Quacken
Quack
{
  "tracks": {
    "href": "https://api.spotify.com/v1/search?query=All+the+Small+Things&type=track&offset=0&limit=20",
    "items": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
              },
              "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
              "id": "6FBDaR13swtiWwGhX1WQsP",
              "name": "blink-182",
              "type": "artist",
              "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5qt11cWjSs5Gbqj2Wyfu38"
          },
          "href": "https://api.spotify.com/v1/albums/5qt11cWjSs5Gbqj2Wyfu38",
          "id": "5qt11cWjSs5Gbqj2Wyfu38",
          "images": [
            {
              "height": 636,
              "url": "https://i.scdn.co/image/13f894c1300cbdda027ff948ee963640c5126d29",
              "width": 640
            },
            {
              "height": 298,
              "url": "https://i.scdn.co/image/13df38bffb65d58fde5341184282a908e49689d4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/9c233fb13e1758e6035bc9e19d77cda1b18fe84e",
              "width": 64
            }
          ],
          "name": "Enema Of The State",
          "type": "album",
          "uri": "spotify:album:5qt11cWjSs5Gbqj2Wyfu38"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 168000,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7yCPwWs66K8Ba5lFuU2bcx"
        },
        "href": "https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx",
        "id": "7yCPwWs66K8Ba5lFuU2bcx",
        "name": "All The Small Things",
        "popularity": 74,
        "preview_url": null,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:7yCPwWs66K8Ba5lFuU2bcx"
      },
====================================================================================
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
              },
              "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
              "id": "6FBDaR13swtiWwGhX1WQsP",
              "name": "blink-182",
              "type": "artist",
              "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
            }
          ],
          "available_markets": [
            "CA",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3ReTZiBrVtZaufbC1tCHfM"
          },
          "href": "https://api.spotify.com/v1/albums/3ReTZiBrVtZaufbC1tCHfM",
          "id": "3ReTZiBrVtZaufbC1tCHfM",
          "images": [
            {
              "height": 636,
              "url": "https://i.scdn.co/image/ca8ab587ed46c325fd397ba20dd5fb6a59e6c94e",
              "width": 640
            },
            {
              "height": 298,
              "url": "https://i.scdn.co/image/a5cb7e9374696b6ee4df1767464f8c68e816159a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/58b3bdd8ef4e869835f60ef32fe9a5b3dd0875aa",
              "width": 64
            }
          ],
          "name": "Enema Of The State",
          "type": "album",
          "uri": "spotify:album:3ReTZiBrVtZaufbC1tCHfM"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 168200,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0lHWf385QpzpHulxt029L6"
        },
        "href": "https://api.spotify.com/v1/tracks/0lHWf385QpzpHulxt029L6",
        "id": "0lHWf385QpzpHulxt029L6",
        "name": "All The Small Things",
        "popularity": 47,
        "preview_url": null,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:0lHWf385QpzpHulxt029L6"
      },
====================================================================================
      {
        "album": {
          "album_type": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
              },
              "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
              "id": "6FBDaR13swtiWwGhX1WQsP",
              "name": "blink-182",
              "type": "artist",
              "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/31mnNcl6CzIcX8j9n75vYZ"
          },
          "href": "https://api.spotify.com/v1/albums/31mnNcl6CzIcX8j9n75vYZ",
          "id": "31mnNcl6CzIcX8j9n75vYZ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ade080dcae7009f7b16c90a3f4de76d006a81ca6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/1b49a7f32a13299d16b400515c9be3ae2177515f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/2d3a52ff1f77a9982889c69e96dfe14e9eadfa46",
              "width": 64
            }
          ],
          "name": "Greatest Hits",
          "type": "album",
          "uri": "spotify:album:31mnNcl6CzIcX8j9n75vYZ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 171055,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5uAzuQcZEufbP3NamOy2dH"
        },
        "href": "https://api.spotify.com/v1/tracks/5uAzuQcZEufbP3NamOy2dH",
        "id": "5uAzuQcZEufbP3NamOy2dH",
        "name": "All The Small Things",
        "popularity": 45,
        "preview_url": null,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:5uAzuQcZEufbP3NamOy2dH"
      },
====================================================================================
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5HYNPEO2NNBONQkp3Mvwvc"
              },
              "href": "https://api.spotify.com/v1/artists/5HYNPEO2NNBONQkp3Mvwvc",
              "id": "5HYNPEO2NNBONQkp3Mvwvc",
              "name": "Scott Bradlee's Postmodern Jukebox",
              "type": "artist",
              "uri": "spotify:artist:5HYNPEO2NNBONQkp3Mvwvc"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/48DZGgsnOeX8CZR2SjUMmH"
          },
          "href": "https://api.spotify.com/v1/albums/48DZGgsnOeX8CZR2SjUMmH",
          "id": "48DZGgsnOeX8CZR2SjUMmH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ea1723af8299e32f0b360e175f34eef5058801ef",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/5e00784aea7cc06f160b7e3fd70124bf37127ead",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/0d3db781b15f43816d6a1acebc31524dc2e915c5",
              "width": 64
            }
          ],
          "name": "Fake Blues",
          "type": "album",
          "uri": "spotify:album:48DZGgsnOeX8CZR2SjUMmH"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5HYNPEO2NNBONQkp3Mvwvc"
            },
            "href": "https://api.spotify.com/v1/artists/5HYNPEO2NNBONQkp3Mvwvc",
            "id": "5HYNPEO2NNBONQkp3Mvwvc",
            "name": "Scott Bradlee's Postmodern Jukebox",
            "type": "artist",
            "uri": "spotify:artist:5HYNPEO2NNBONQkp3Mvwvc"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/462OdWtVKstcqagYhQOwFB"
            },
            "href": "https://api.spotify.com/v1/artists/462OdWtVKstcqagYhQOwFB",
            "id": "462OdWtVKstcqagYhQOwFB",
            "name": "Puddles Pity Party",
            "type": "artist",
            "uri": "spotify:artist:462OdWtVKstcqagYhQOwFB"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 204000,
        "explicit": false,
        "external_ids": {
          "isrc": "GBDMT1700167"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4rHrFEePW9WTMYby9bdsUr"
        },
        "href": "https://api.spotify.com/v1/tracks/4rHrFEePW9WTMYby9bdsUr",
        "id": "4rHrFEePW9WTMYby9bdsUr",
        "name": "All The Small Things",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/8a39c7a626a1c4f9e8c5717668319cbd646edca5?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:4rHrFEePW9WTMYby9bdsUr"
      },
      {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/470WlqN9HSRDGNaMufeHHF"
              },
              "href": "https://api.spotify.com/v1/artists/470WlqN9HSRDGNaMufeHHF",
              "id": "470WlqN9HSRDGNaMufeHHF",
              "name": "Imaginary Future",
              "type": "artist",
              "uri": "spotify:artist:470WlqN9HSRDGNaMufeHHF"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1pIBGWVX5bbrcGeGiRXOIT"
          },
          "href": "https://api.spotify.com/v1/albums/1pIBGWVX5bbrcGeGiRXOIT",
          "id": "1pIBGWVX5bbrcGeGiRXOIT",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/d4c2dac68651c7fce114392ac470531daa62ff01",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ce60be12d59ad4b587c89af0c8d31320e4f140f7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/49b3b69260242bbc6dac597dbc56aaddeb9e0968",
              "width": 64
            }
          ],
          "name": "All the Small Things",
          "type": "album",
          "uri": "spotify:album:1pIBGWVX5bbrcGeGiRXOIT"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/470WlqN9HSRDGNaMufeHHF"
            },
            "href": "https://api.spotify.com/v1/artists/470WlqN9HSRDGNaMufeHHF",
            "id": "470WlqN9HSRDGNaMufeHHF",
            "name": "Imaginary Future",
            "type": "artist",
            "uri": "spotify:artist:470WlqN9HSRDGNaMufeHHF"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 135889,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADC1714368"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7khwt8bxTlY0HXEMuuvtsQ"
        },
        "href": "https://api.spotify.com/v1/tracks/7khwt8bxTlY0HXEMuuvtsQ",
        "id": "7khwt8bxTlY0HXEMuuvtsQ",
        "name": "All the Small Things",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/fa6af7d1104fb2bab909409a5eac6060b8121283?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7khwt8bxTlY0HXEMuuvtsQ"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5bHjVR4F2Tfq4Ha6x7K6wU"
              },
              "href": "https://api.spotify.com/v1/artists/5bHjVR4F2Tfq4Ha6x7K6wU",
              "id": "5bHjVR4F2Tfq4Ha6x7K6wU",
              "name": "Rockabye Baby!",
              "type": "artist",
              "uri": "spotify:artist:5bHjVR4F2Tfq4Ha6x7K6wU"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5zWn6wnfdOojDAhg6n9HNn"
          },
          "href": "https://api.spotify.com/v1/albums/5zWn6wnfdOojDAhg6n9HNn",
          "id": "5zWn6wnfdOojDAhg6n9HNn",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/dcd5e2233babcd70ed3eab0f5b71e96049c8557f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/1934b7712348aaffc8412ba830dad5f83e8136e5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/1358139ff5de8e7587a6111247cf76fbf2ef4560",
              "width": 64
            }
          ],
          "name": "Lullaby Renditions of Blink-182",
          "type": "album",
          "uri": "spotify:album:5zWn6wnfdOojDAhg6n9HNn"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5bHjVR4F2Tfq4Ha6x7K6wU"
            },
            "href": "https://api.spotify.com/v1/artists/5bHjVR4F2Tfq4Ha6x7K6wU",
            "id": "5bHjVR4F2Tfq4Ha6x7K6wU",
            "name": "Rockabye Baby!",
            "type": "artist",
            "uri": "spotify:artist:5bHjVR4F2Tfq4Ha6x7K6wU"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 165400,
        "explicit": false,
        "external_ids": {
          "isrc": "USEWC1589284"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6VR2LQT41FYZ0mRhNVoTiT"
        },
        "href": "https://api.spotify.com/v1/tracks/6VR2LQT41FYZ0mRhNVoTiT",
        "id": "6VR2LQT41FYZ0mRhNVoTiT",
        "name": "All the Small Things",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/6c44f4d3cea18aa2a0f7b13ceb0183e10db82ece?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6VR2LQT41FYZ0mRhNVoTiT"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6MERXsiRbur2oJZFgYRDKz"
              },
              "href": "https://api.spotify.com/v1/artists/6MERXsiRbur2oJZFgYRDKz",
              "id": "6MERXsiRbur2oJZFgYRDKz",
              "name": "Vitamin String Quartet",
              "type": "artist",
              "uri": "spotify:artist:6MERXsiRbur2oJZFgYRDKz"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/74Ax92LB5WmiXcnmd2FWax"
          },
          "href": "https://api.spotify.com/v1/albums/74Ax92LB5WmiXcnmd2FWax",
          "id": "74Ax92LB5WmiXcnmd2FWax",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/cc8a2811a3b090e21389edf5a7b1dff3f98b399a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/45352f737de21829bb2cdd42b2889970f39647ae",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab2e396a7528feff4334481725764ed0f56e7bc4",
              "width": 64
            }
          ],
          "name": "Vitamin String Quartet Performs Blink-182",
          "type": "album",
          "uri": "spotify:album:74Ax92LB5WmiXcnmd2FWax"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6MERXsiRbur2oJZFgYRDKz"
            },
            "href": "https://api.spotify.com/v1/artists/6MERXsiRbur2oJZFgYRDKz",
            "id": "6MERXsiRbur2oJZFgYRDKz",
            "name": "Vitamin String Quartet",
            "type": "artist",
            "uri": "spotify:artist:6MERXsiRbur2oJZFgYRDKz"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 169080,
        "explicit": false,
        "external_ids": {
          "isrc": "USEWC1286074"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5hUqwjVEm5ot6XIgHyo43M"
        },
        "href": "https://api.spotify.com/v1/tracks/5hUqwjVEm5ot6XIgHyo43M",
        "id": "5hUqwjVEm5ot6XIgHyo43M",
        "name": "All the Small Things",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/25ea1fe0febb37abb4322be21681e1950ac15797?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5hUqwjVEm5ot6XIgHyo43M"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "available_markets": [
            "MX",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1B6tdvjPNTLVFWvMVmpiw9"
          },
          "href": "https://api.spotify.com/v1/albums/1B6tdvjPNTLVFWvMVmpiw9",
          "id": "1B6tdvjPNTLVFWvMVmpiw9",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/cecb4040edd6d2cd2af13af54a3726964a3fdfe0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/9bd02d36c5121e657cc7ab416da4317235ced71e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/3c33198435e8b4f3e4fb8a7d33bc23a9c6c095c0",
              "width": 64
            }
          ],
          "name": "20 #1’s: Alternative Rock",
          "type": "album",
          "uri": "spotify:album:1B6tdvjPNTLVFWvMVmpiw9"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 168040,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/561kA2SeP0mAlYwqgDlNFX"
        },
        "href": "https://api.spotify.com/v1/tracks/561kA2SeP0mAlYwqgDlNFX",
        "id": "561kA2SeP0mAlYwqgDlNFX",
        "name": "All The Small Things",
        "popularity": 29,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:561kA2SeP0mAlYwqgDlNFX"
      },
      {
        "album": {
          "album_type": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
              },
              "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
              "id": "6FBDaR13swtiWwGhX1WQsP",
              "name": "blink-182",
              "type": "artist",
              "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
            }
          ],
          "available_markets": [
            "CA",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5EsQ7956b4yaKtb1iptpJP"
          },
          "href": "https://api.spotify.com/v1/albums/5EsQ7956b4yaKtb1iptpJP",
          "id": "5EsQ7956b4yaKtb1iptpJP",
          "images": [
            {
              "height": 635,
              "url": "https://i.scdn.co/image/24d163361dc84bf447198c040d7b604e2a1720d0",
              "width": 640
            },
            {
              "height": 297,
              "url": "https://i.scdn.co/image/b84faed869ed0a1d2a7b52d47746f3f113deb750",
              "width": 300
            },
            {
              "height": 63,
              "url": "https://i.scdn.co/image/52c2092e2a6692025c5c10933547b1f91bf0f357",
              "width": 64
            }
          ],
          "name": "Greatest Hits",
          "type": "album",
          "uri": "spotify:album:5EsQ7956b4yaKtb1iptpJP"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 171066,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5P1Gz8lkRgmRYXgV84yoBf"
        },
        "href": "https://api.spotify.com/v1/tracks/5P1Gz8lkRgmRYXgV84yoBf",
        "id": "5P1Gz8lkRgmRYXgV84yoBf",
        "name": "All The Small Things",
        "popularity": 26,
        "preview_url": null,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:5P1Gz8lkRgmRYXgV84yoBf"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5ZYCpwZkYiHbep6fQumOJO"
              },
              "href": "https://api.spotify.com/v1/artists/5ZYCpwZkYiHbep6fQumOJO",
              "id": "5ZYCpwZkYiHbep6fQumOJO",
              "name": "Buona Condotta",
              "type": "artist",
              "uri": "spotify:artist:5ZYCpwZkYiHbep6fQumOJO"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/47wZJRSZYLIH5JAdeSa9r9"
          },
          "href": "https://api.spotify.com/v1/albums/47wZJRSZYLIH5JAdeSa9r9",
          "id": "47wZJRSZYLIH5JAdeSa9r9",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/b32b92bd02999cc868ad8aa18fbaaa7687b5ff6c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/f3a11d0a6b29f406808d13177090dae161dd3a9b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/64ad2dadf5b287e01fbb38d394e08827ae56a08c",
              "width": 64
            }
          ],
          "name": "Buona La Prima",
          "type": "album",
          "uri": "spotify:album:47wZJRSZYLIH5JAdeSa9r9"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 174107,
        "explicit": false,
        "external_ids": {
          "isrc": "usdy41631242"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1MLA9Ekf41frRUzVcSpa0O"
        },
        "href": "https://api.spotify.com/v1/tracks/1MLA9Ekf41frRUzVcSpa0O",
        "id": "1MLA9Ekf41frRUzVcSpa0O",
        "name": "All the Small Things",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/4bdfe978425fb2dbf43648fec6a42d6c4d3011bf?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:1MLA9Ekf41frRUzVcSpa0O"
      },
      {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
              },
              "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
              "id": "6FBDaR13swtiWwGhX1WQsP",
              "name": "blink-182",
              "type": "artist",
              "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6aXNm9ZaI6eKoRvaVBwU9j"
          },
          "href": "https://api.spotify.com/v1/albums/6aXNm9ZaI6eKoRvaVBwU9j",
          "id": "6aXNm9ZaI6eKoRvaVBwU9j",
          "images": [
            {
              "height": 636,
              "url": "https://i.scdn.co/image/1dc76d49b5af7b9f31a0a63b56854743d4ff808f",
              "width": 640
            },
            {
              "height": 298,
              "url": "https://i.scdn.co/image/36c61aa95a7a7ec8e74f59c1a892ce4899cae021",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/b2493236bc13fd471ac0fe69ca0d576d83c615bc",
              "width": 64
            }
          ],
          "name": "I Won't Be Home For Christmas",
          "type": "album",
          "uri": "spotify:album:6aXNm9ZaI6eKoRvaVBwU9j"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 173373,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2SzhNi1sjvIz29scIuBCb3"
        },
        "href": "https://api.spotify.com/v1/tracks/2SzhNi1sjvIz29scIuBCb3",
        "id": "2SzhNi1sjvIz29scIuBCb3",
        "name": "All The Small Things",
        "popularity": 24,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2SzhNi1sjvIz29scIuBCb3"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "available_markets": [
            "CA",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5KzBXh8kIwV0mUDnqlBQy3"
          },
          "href": "https://api.spotify.com/v1/albums/5KzBXh8kIwV0mUDnqlBQy3",
          "id": "5KzBXh8kIwV0mUDnqlBQy3",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/37918b82c9c3fbf913f4998b44ed9de7c0b484e3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/edcc011cdbb38246cdcbb9607218a3f747f7d3df",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/958c12eb4889a5cc5d9cd7f25f6c43962f720c4f",
              "width": 64
            }
          ],
          "name": "20 #1’s: 90s",
          "type": "album",
          "uri": "spotify:album:5KzBXh8kIwV0mUDnqlBQy3"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 168413,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7hq5tgZJLTTFsgnxXU5Np8"
        },
        "href": "https://api.spotify.com/v1/tracks/7hq5tgZJLTTFsgnxXU5Np8",
        "id": "7hq5tgZJLTTFsgnxXU5Np8",
        "name": "All The Small Things",
        "popularity": 22,
        "preview_url": null,
        "track_number": 15,
        "type": "track",
        "uri": "spotify:track:7hq5tgZJLTTFsgnxXU5Np8"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7kcbYCvOoFZs9FRPDWVrey"
          },
          "href": "https://api.spotify.com/v1/albums/7kcbYCvOoFZs9FRPDWVrey",
          "id": "7kcbYCvOoFZs9FRPDWVrey",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/073769066b959ebe551594ce990de9d3be2e0919",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/a4627c267cfafef705084aea6ea901e1b166d7a0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/dd8e1c7b673061075de1c17935284d65714ac785",
              "width": 64
            }
          ],
          "name": "Runtastic - Power Workout (Vol. 1)",
          "type": "album",
          "uri": "spotify:album:7kcbYCvOoFZs9FRPDWVrey"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
            },
            "href": "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
            "id": "6FBDaR13swtiWwGhX1WQsP",
            "name": "blink-182",
            "type": "artist",
            "uri": "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 167613,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC19959123"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1v9yUlYhxqvo2NobGxuf0b"
        },
        "href": "https://api.spotify.com/v1/tracks/1v9yUlYhxqvo2NobGxuf0b",
        "id": "1v9yUlYhxqvo2NobGxuf0b",
        "name": "All The Small Things",
        "popularity": 24,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1v9yUlYhxqvo2NobGxuf0b"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1Vvvx45Apu6dQqwuZQxtgW"
              },
              "href": "https://api.spotify.com/v1/artists/1Vvvx45Apu6dQqwuZQxtgW",
              "id": "1Vvvx45Apu6dQqwuZQxtgW",
              "name": "Kidz Bop Kids",
              "type": "artist",
              "uri": "spotify:artist:1Vvvx45Apu6dQqwuZQxtgW"
            }
          ],
          "available_markets": [
            "CA",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0gVPtZedah67CY9OjsdvR5"
          },
          "href": "https://api.spotify.com/v1/albums/0gVPtZedah67CY9OjsdvR5",
          "id": "0gVPtZedah67CY9OjsdvR5",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/f694b7353123f236fafbf11b72bb1a3c1ab24ddb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/83ca53078a5ce24660f2678eb0ea7284c6b834c0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/c0815bef4339920566796cb4f3d84a09e0989f0c",
              "width": 64
            }
          ],
          "name": "Kidz Bop",
          "type": "album",
          "uri": "spotify:album:0gVPtZedah67CY9OjsdvR5"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1Vvvx45Apu6dQqwuZQxtgW"
            },
            "href": "https://api.spotify.com/v1/artists/1Vvvx45Apu6dQqwuZQxtgW",
            "id": "1Vvvx45Apu6dQqwuZQxtgW",
            "name": "Kidz Bop Kids",
            "type": "artist",
            "uri": "spotify:artist:1Vvvx45Apu6dQqwuZQxtgW"
          }
        ],
        "available_markets": [
          "CA",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 170160,
        "explicit": false,
        "external_ids": {
          "isrc": "USRZR0104204"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0ppzUXDqE6fxfz75r6UkTQ"
        },
        "href": "https://api.spotify.com/v1/tracks/0ppzUXDqE6fxfz75r6UkTQ",
        "id": "0ppzUXDqE6fxfz75r6UkTQ",
        "name": "All The Small Things",
        "popularity": 19,
        "preview_url": null,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0ppzUXDqE6fxfz75r6UkTQ"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/30uiS1n3uIGXJEYFR1GVDy"
              },
              "href": "https://api.spotify.com/v1/artists/30uiS1n3uIGXJEYFR1GVDy",
              "id": "30uiS1n3uIGXJEYFR1GVDy",
              "name": "The Brian Jonestown Massacre",
              "type": "artist",
              "uri": "spotify:artist:30uiS1n3uIGXJEYFR1GVDy"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2TECf3wlAuUm7GG5JKIwUr"
          },
          "href": "https://api.spotify.com/v1/albums/2TECf3wlAuUm7GG5JKIwUr",
          "id": "2TECf3wlAuUm7GG5JKIwUr",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/8e5327dfe4e4ae3922af9644366ed5612db5e4e4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/70d974b642c69c82385c0a3836d22865ad46d012",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/c940aa9f9a8e8dc440698c653f7be76160e2ed86",
              "width": 64
            }
          ],
          "name": "Bringing It All Back Home - Again",
          "type": "album",
          "uri": "spotify:album:2TECf3wlAuUm7GG5JKIwUr"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/30uiS1n3uIGXJEYFR1GVDy"
            },
            "href": "https://api.spotify.com/v1/artists/30uiS1n3uIGXJEYFR1GVDy",
            "id": "30uiS1n3uIGXJEYFR1GVDy",
            "name": "The Brian Jonestown Massacre",
            "type": "artist",
            "uri": "spotify:artist:30uiS1n3uIGXJEYFR1GVDy"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 186520,
        "explicit": false,
        "external_ids": {
          "isrc": "GBSLX0710005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4MpxTZpOqIpGx41XSCNhOX"
        },
        "href": "https://api.spotify.com/v1/tracks/4MpxTZpOqIpGx41XSCNhOX",
        "id": "4MpxTZpOqIpGx41XSCNhOX",
        "name": "All Things Great & Small",
        "popularity": 15,
        "preview_url": "https://p.scdn.co/mp3-preview/14d875db5d5c8dda7d27620427d2ed8934f20be5?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:4MpxTZpOqIpGx41XSCNhOX"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/67bWxnBXfBggNd4U6k9ZBw"
              },
              "href": "https://api.spotify.com/v1/artists/67bWxnBXfBggNd4U6k9ZBw",
              "id": "67bWxnBXfBggNd4U6k9ZBw",
              "name": "The University of Oregon Marching Band",
              "type": "artist",
              "uri": "spotify:artist:67bWxnBXfBggNd4U6k9ZBw"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4V41Ekad6XgF5wjzrMTP8o"
          },
          "href": "https://api.spotify.com/v1/albums/4V41Ekad6XgF5wjzrMTP8o",
          "id": "4V41Ekad6XgF5wjzrMTP8o",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a3588f183f082925e38c1c14a9ab1796775e585d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/9a8b6578b7349faf1c17f20238f78cd8c774e9ad",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/43f48066a98ec6d054681e7358a38166b0655688",
              "width": 64
            }
          ],
          "name": "Fighting Duck Spirit 2002",
          "type": "album",
          "uri": "spotify:album:4V41Ekad6XgF5wjzrMTP8o"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5h7oZ7t5CU9lst1mIrjp3R"
            },
            "href": "https://api.spotify.com/v1/artists/5h7oZ7t5CU9lst1mIrjp3R",
            "id": "5h7oZ7t5CU9lst1mIrjp3R",
            "name": "Tom DeLonge",
            "type": "artist",
            "uri": "spotify:artist:5h7oZ7t5CU9lst1mIrjp3R"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0FOYGJujASE1pCw5WNHf0g"
            },
            "href": "https://api.spotify.com/v1/artists/0FOYGJujASE1pCw5WNHf0g",
            "id": "0FOYGJujASE1pCw5WNHf0g",
            "name": "Mark Hoppus",
            "type": "artist",
            "uri": "spotify:artist:0FOYGJujASE1pCw5WNHf0g"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/67bWxnBXfBggNd4U6k9ZBw"
            },
            "href": "https://api.spotify.com/v1/artists/67bWxnBXfBggNd4U6k9ZBw",
            "id": "67bWxnBXfBggNd4U6k9ZBw",
            "name": "The University of Oregon Marching Band",
            "type": "artist",
            "uri": "spotify:artist:67bWxnBXfBggNd4U6k9ZBw"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 106360,
        "explicit": false,
        "external_ids": {
          "isrc": "QMZ621402789"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0bbrDO5k6ujiuY0orusc3R"
        },
        "href": "https://api.spotify.com/v1/tracks/0bbrDO5k6ujiuY0orusc3R",
        "id": "0bbrDO5k6ujiuY0orusc3R",
        "name": "All the Small Things",
        "popularity": 14,
        "preview_url": "https://p.scdn.co/mp3-preview/02262f0500ac395a8b053c4139b7772740ea8bf5?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:0bbrDO5k6ujiuY0orusc3R"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/23bKc6bG4JatARWH7UxsKk"
              },
              "href": "https://api.spotify.com/v1/artists/23bKc6bG4JatARWH7UxsKk",
              "id": "23bKc6bG4JatARWH7UxsKk",
              "name": "Lucas King",
              "type": "artist",
              "uri": "spotify:artist:23bKc6bG4JatARWH7UxsKk"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0mqlLL0fIqotC0LNI2EpvI"
          },
          "href": "https://api.spotify.com/v1/albums/0mqlLL0fIqotC0LNI2EpvI",
          "id": "0mqlLL0fIqotC0LNI2EpvI",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/eb322a9208456338e9c35f05a3c6ddac7106acf1",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/58d1656bfa98815145b698592c5befba66e8025a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/8af69cf6e8045775239f9edd1699359bafb3b767",
              "width": 64
            }
          ],
          "name": "Piano Collections, Vol. 1 - Blink 182",
          "type": "album",
          "uri": "spotify:album:0mqlLL0fIqotC0LNI2EpvI"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/23bKc6bG4JatARWH7UxsKk"
            },
            "href": "https://api.spotify.com/v1/artists/23bKc6bG4JatARWH7UxsKk",
            "id": "23bKc6bG4JatARWH7UxsKk",
            "name": "Lucas King",
            "type": "artist",
            "uri": "spotify:artist:23bKc6bG4JatARWH7UxsKk"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 158464,
        "explicit": false,
        "external_ids": {
          "isrc": "TCABX1451564"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1EWi3m1HnWhUFpUYtOIyjy"
        },
        "href": "https://api.spotify.com/v1/tracks/1EWi3m1HnWhUFpUYtOIyjy",
        "id": "1EWi3m1HnWhUFpUYtOIyjy",
        "name": "All the Small Things",
        "popularity": 10,
        "preview_url": "https://p.scdn.co/mp3-preview/3731ee8fe92be5e6c760ee490012c27344708e4e?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:1EWi3m1HnWhUFpUYtOIyjy"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/648dUUIlz7RSeg3O8CbTat"
              },
              "href": "https://api.spotify.com/v1/artists/648dUUIlz7RSeg3O8CbTat",
              "id": "648dUUIlz7RSeg3O8CbTat",
              "name": "Midnite String Quartet",
              "type": "artist",
              "uri": "spotify:artist:648dUUIlz7RSeg3O8CbTat"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3W1slsq76reM2HdYX47m2a"
          },
          "href": "https://api.spotify.com/v1/albums/3W1slsq76reM2HdYX47m2a",
          "id": "3W1slsq76reM2HdYX47m2a",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/451760569e93db6ade70f6a6ee39ecc1ff2a7dd7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/58dfde1c467b0e07a1806cc0bc843d2539c5d3ca",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/14474d07de85c26f3571cfc7ce53e4db5dd70a69",
              "width": 64
            }
          ],
          "name": "Emo Heartstrings",
          "type": "album",
          "uri": "spotify:album:3W1slsq76reM2HdYX47m2a"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/648dUUIlz7RSeg3O8CbTat"
            },
            "href": "https://api.spotify.com/v1/artists/648dUUIlz7RSeg3O8CbTat",
            "id": "648dUUIlz7RSeg3O8CbTat",
            "name": "Midnite String Quartet",
            "type": "artist",
            "uri": "spotify:artist:648dUUIlz7RSeg3O8CbTat"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 183604,
        "explicit": false,
        "external_ids": {
          "isrc": "USA2P1617931"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1XS1HMamui28yOvkt4q8oQ"
        },
        "href": "https://api.spotify.com/v1/tracks/1XS1HMamui28yOvkt4q8oQ",
        "id": "1XS1HMamui28yOvkt4q8oQ",
        "name": "All the Small Things",
        "popularity": 10,
        "preview_url": "https://p.scdn.co/mp3-preview/1fdabe25d121529a6f76aa674b8f8f5c06dcad17?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1XS1HMamui28yOvkt4q8oQ"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1ghQ7AScEoiS2thrUJg2o9"
              },
              "href": "https://api.spotify.com/v1/artists/1ghQ7AScEoiS2thrUJg2o9",
              "id": "1ghQ7AScEoiS2thrUJg2o9",
              "name": "The Symphonic Pops",
              "type": "artist",
              "uri": "spotify:artist:1ghQ7AScEoiS2thrUJg2o9"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6WbFby7U4sEK4rDN7kHJH1"
          },
          "href": "https://api.spotify.com/v1/albums/6WbFby7U4sEK4rDN7kHJH1",
          "id": "6WbFby7U4sEK4rDN7kHJH1",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/bf057c7e132159c9e4329f164dd6a96a51166278",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/de3e5a5656535fd079bb3552491930e9cccd8024",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/68a27fabc676b6105d3f990a4e8e70bf7b2be102",
              "width": 64
            }
          ],
          "name": "Pop Symphony 2015, Vol. 2",
          "type": "album",
          "uri": "spotify:album:6WbFby7U4sEK4rDN7kHJH1"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1ghQ7AScEoiS2thrUJg2o9"
            },
            "href": "https://api.spotify.com/v1/artists/1ghQ7AScEoiS2thrUJg2o9",
            "id": "1ghQ7AScEoiS2thrUJg2o9",
            "name": "The Symphonic Pops",
            "type": "artist",
            "uri": "spotify:artist:1ghQ7AScEoiS2thrUJg2o9"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 165512,
        "explicit": false,
        "external_ids": {
          "isrc": "FR10S1518921"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5OOo5ngXc7ZH0IUrUAVKdN"
        },
        "href": "https://api.spotify.com/v1/tracks/5OOo5ngXc7ZH0IUrUAVKdN",
        "id": "5OOo5ngXc7ZH0IUrUAVKdN",
        "name": "All the Small Things - Orchestral Version",
        "popularity": 10,
        "preview_url": "https://p.scdn.co/mp3-preview/f0120dd0540e47b09fcbce43da142f8f45dbb616?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5OOo5ngXc7ZH0IUrUAVKdN"
      },
      {
        "album": {
          "album_type": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5kCZNPIhI7i4tqjAqgDume"
          },
          "href": "https://api.spotify.com/v1/albums/5kCZNPIhI7i4tqjAqgDume",
          "id": "5kCZNPIhI7i4tqjAqgDume",
          "images": [
            {
              "height": 600,
              "url": "https://i.scdn.co/image/9b80725af06df9d0c28a4422803a44226ee2a1df",
              "width": 600
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/e65dac89702c64b27e1239071a56ec6a952f9430",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/5d268a61cf1b7e9266fdab8e1b6ea20eeb7ac808",
              "width": 64
            }
          ],
          "name": "90's Alternative Rock",
          "type": "album",
          "uri": "spotify:album:5kCZNPIhI7i4tqjAqgDume"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6Fj1ZIj7xwphHKTrLumEAP"
            },
            "href": "https://api.spotify.com/v1/artists/6Fj1ZIj7xwphHKTrLumEAP",
            "id": "6Fj1ZIj7xwphHKTrLumEAP",
            "name": "Wild Tales",
            "type": "artist",
            "uri": "spotify:artist:6Fj1ZIj7xwphHKTrLumEAP"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 172000,
        "explicit": false,
        "external_ids": {
          "isrc": "CAM460400042"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7eG1GRuaZcTbyqsTwdffTe"
        },
        "href": "https://api.spotify.com/v1/tracks/7eG1GRuaZcTbyqsTwdffTe",
        "id": "7eG1GRuaZcTbyqsTwdffTe",
        "name": "All the Small Things",
        "popularity": 12,
        "preview_url": "https://p.scdn.co/mp3-preview/18704ec44bbd84348a89e7a0612cd61b264f7c23?cid=445d281570234890ac6c673b98ef8930",
        "track_number": 21,
        "type": "track",
        "uri": "spotify:track:7eG1GRuaZcTbyqsTwdffTe"
      }
    ],
    "limit": 20,
    "next": "https://api.spotify.com/v1/search?query=All+the+Small+Things&type=track&offset=20&limit=20",
    "offset": 0,
    "previous": null,
    "total": 402
  }
}
*/
