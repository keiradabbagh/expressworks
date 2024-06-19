const express = require("express");
const app = express();
const PORT = process.argv[2] || 3000;

const books = [
  {
    title: "Express.js Guide",
    tags: ["node.js", "express.js"],
    url: "http://expressjsguide.com",
  },
  {
    title: "Rapid Prototyping with JS",
    tags: ["backbone.js", "node.js", "mongodb"],
    url: "http://rpjs.co",
  },
  { title: "JavaScript: The Good Parts", tags: ["javascript"] },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
