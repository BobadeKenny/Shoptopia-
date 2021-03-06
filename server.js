var express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + "/public"));
app.get("/*", function(req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port);