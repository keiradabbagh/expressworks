const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/home", (req, res) => {
  res.render("index", { date: new Date().toDateString() });
});

const port = process.argv[2] || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
