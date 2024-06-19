const express = require("express");
const stylus = require("stylus");
const path = require("path");

const app = express();
const PORT = process.argv[2] || 3000;
const PUBLIC_DIR = process.argv[3] || path.join(__dirname, "public");

app.use(
  stylus.middleware({
    src: PUBLIC_DIR,
    dest: PUBLIC_DIR,
    compile: function (str, srcPath) {
      return stylus(str).set("filename", srcPath).set("compress", true);
    },
  })
);

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
