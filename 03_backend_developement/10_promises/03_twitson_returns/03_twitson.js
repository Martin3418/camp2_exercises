const OAuth = require("oauth");
const fetch = require("node-fetch");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

function getText(element) {
  return element.text;
}

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

function twitson(twitterUser) {
  return new Promise (function(resolve, reject) {
    oauth.get(url + twitterUser, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
      if (error) {
        reject(error);
      } else {
        const tweets = JSON.parse(data);
        const texts = tweets.map(getText).join(",");

        const urlWatson = process.env.WATSON_URL;
        const username = process.env.WATSON_USERNAME;
        const password = process.env.WATSON_KEY;

        const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
        const uri = encodeURI(urlWatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + texts);

        resolve(
          fetch(uri,
            {headers: { "Authorization": auth }}
          )
            .then(response => response.json()));
      }
    });
  });
}

twitson("neiltyson")
  .then(watsonResult => {
    // console.log(watsonResult);
    console.log("sentiments", watsonResult.sentiment);
    console.log("emotions", watsonResult.emotion);
  });
