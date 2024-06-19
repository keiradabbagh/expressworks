const express = require("express");
const app = express();
const PORT = process.argv[2];

app.get("/search", function (req, res) {
  res.json(req.query);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
