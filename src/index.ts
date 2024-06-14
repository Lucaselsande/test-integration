import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
const port = process.env.PORT || 3005;

const app = express();
app.use(bodyParser.json());
const prisma = new PrismaClient();

app.get("/get", async (req, res) => {
  res.status(201).send({ message: "OK", body: req.body });
});
app.post("/post", async (req, res) => {
  const body = JSON.stringify(req.body);
  console.log("llego evento");
  console.log(body);
  const currentTime = new Date().toString();
  console.log("currentTime:", currentTime);
  console.log("respondo 200");
  res.status(200).send({ message: "OK", body: req.body });
});
app.patch("/comment", async (req, res) => {
  console.log(req.body);
  res.status(202).send({ message: "OK", body: req.body });
});
const PORT = port;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
