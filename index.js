const express = require("express");
const helmet = require("helmet");

const app = express();
const port = 3000;

app.use(helmet());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
