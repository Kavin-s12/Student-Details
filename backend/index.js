import express from "express";
import connectDatabse from "./db/config.js";
import { getDetailsRouter } from "./src/router/getDetails.js";
import { addDetailsRouter } from "./src/router/addDetails.js";

const app = express();
const PORT = "5000";
app.use(express.json());

connectDatabse();
app.use(getDetailsRouter);
app.use(addDetailsRouter);

app.all("*", (req, res) => {
  res.status(400).send({ errors: [{ msg: "Route not found" }] });
});

app.listen(PORT, () => {
  console.log("Server started on PORT : ", PORT);
});
