import express  from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/contact", (req, res) => {
  res.send("contact");
});
app.get( (req, res,next) => res.status(404).redirect('/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
