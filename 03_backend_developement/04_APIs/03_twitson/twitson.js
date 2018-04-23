const OAuth = require("oauth");
const request = require("request");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

// Put the express, port and OAuth initialization here...

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

// Again, replace string by your credentials.
oauth.get(url + "Snowden", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
  const tweets = JSON.parse(data);
  function getText(element) {
    return element.text;
  }
  const texts = tweets.map(getText).join(","); // .map pour transformer tableau d'objets en tableau de strin puis join
  console.log(texts);

  const urlWatson = process.env.WATSON_URL;
  const username = process.env.WATSON_USERNAME;
  const password = process.env.WATSON_KEY;

  const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  // const text = "Hold your breath and count to ten";
  const uri = encodeURI(urlWatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + texts);
  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
    console.log(body);
  });
});
