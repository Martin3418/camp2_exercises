const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.get("/categories", function (request, result) {
  const { rows } = await port.query('SELECT * FROM categories') //comment déginer ma database commerce ?
  result.send(rows[0])
})

});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
