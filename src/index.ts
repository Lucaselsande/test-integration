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
  const body = JSON.stringify(req.body)
  console.log('llego evento');
  console.log(body);
  console.log('respondo 201');
  res.status(201).send({ message: "OK", body: req.body });
});
app.patch("/comment", async (req, res) => {
  console.log(req.body);
  res.status(202).send({ message: "OK", body: req.body });
});
const PORT = port;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
