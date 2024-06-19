const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/form", (req, res) => {
  res.send(
    '<form method="POST" action="/form">' +
      '<input type="text" name="str" />' +
      '<button type="submit">Submit</button>' +
      "</form>"
  );
});

app.post("/form", (req, res) => {
  const inputString = req.body.str;
  const reversedString = inputString.split("").reverse().join("");
  res.send(reversedString);
});

const PORT = process.argv[2] || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
