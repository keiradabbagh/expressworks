const express = require("express");
const app = express();
const port = process.argv[2];
const path = process.argv[3];

app.use(express.static(path));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
