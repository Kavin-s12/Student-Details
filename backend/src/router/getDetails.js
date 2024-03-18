import express from "express";
import Student from "../model/studentModel.js";
import { handleQuery } from "../functions/handleQuery.js";

const router = express.Router();

router.post("/student/details", async (req, res) => {
  try {
    const query = handleQuery(req.body);
    const details = await Student.find(query);
    res.send(details);
  } catch (error) {
    res.status(400).send({ errors: [{ msg: error.message }] });
  }
});

export { router as getDetailsRouter };
