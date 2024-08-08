import express from "express";

import connectToDatabase from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});

await connectToDatabase();

console.log("Starting at port: 3000");

app.listen(3000);
