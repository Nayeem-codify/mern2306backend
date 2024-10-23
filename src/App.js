const express = require("express");
const chalk = require("chalk");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    chalk.bgWhiteBright(`Server Connected On Port http://localhost:${process.env.PORT}`)
  );
});
