import express from "express";
import path from "path";
import mongoose from "mongoose";
import auth from "./routes/auth";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
mongoose.connect(
  "mongodb://localhost/myBooksList",
  { useMongoClient: true }
);

app.use("/api/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("running on local: 8080"));
