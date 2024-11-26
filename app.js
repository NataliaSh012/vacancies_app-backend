import vacanciesRoutes from "./routes/vacancy-routes.js";
import bodyParser from "body-parser";
import express from "express";
import { connect } from "mongoose";
import httpError from "./models/http-error.js";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5scabyv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app = express();
const { json } = bodyParser;

app.use(json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/vacancies", vacanciesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route was not found" });
});

connect(url)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
