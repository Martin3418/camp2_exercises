const request = require("request");

function simpleGet(callback) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

simpleGet(console.log);

function simpleGetWithParams(callback) {
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET",
    },
    function (error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}

simpleGetWithParams(console.log);

function validateTimestamp(callback) {
  const newDate = `${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDay()}`;
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${newDate}`,
      method: "GET",
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
validateTimestamp(console.log);


module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
