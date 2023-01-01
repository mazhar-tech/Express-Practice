var express = require("express");
var app = express();
const PORT = 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mazhar", (req, res) => {
  res.send("My Name is Mazhar");
});

app.post("/pos", (req, res) => {
  const { name } = req.body;
  res.send(`Welcome ${name}`);
});


app.listen(PORT, (error) => {
  if (!error) console.log("Example app listening on port " + PORT);
  else console.log("Error", error);
});
