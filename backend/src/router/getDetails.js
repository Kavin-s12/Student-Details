import express from "express";
import Student from "../model/studentModel.js";
import { handleQuery } from "../functions/handleQuery.js";

const router = express.Router();

router.post("/student/details", async (req, res) => {
  try {
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;

    const query = handleQuery(req.body);

    const count = await Student.countDocuments(query);
    const details = await Student.find(query)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    res.status(200).send({ details, page, pages: Math.ceil(count / pageSize) });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: error.message }] });
  }
});

export { router as getDetailsRouter };
