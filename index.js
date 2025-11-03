import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/dollshop")
  .then(() => console.log("Mongodb Database Conection Successfully"))
  .catch((err) =>
    console.error("Could not connect to the Mongodb Database", err)
  );

app.get("/", (req, res) => {
  res.send(" Server runndig succefully");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on Port ${port}`));
