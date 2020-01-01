import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.status(200).send({ message: "Hello world" });
});

app.listen(2000, () => {
  console.log(`server running on port 2000`);
});
