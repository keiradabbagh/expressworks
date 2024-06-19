const express = require("express");
const crypto = require("crypto");

const app = express();
const port = process.argv[2];

app.put("/message/:id", function (req, res) {
  const id = req.params.id;
  const hash = crypto
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest("hex");
  res.send(hash);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
