import express from "express";
import { body, validationResult } from "express-validator";
import Student from "../model/studentModel.js";

const router = express.Router();

// validating the input from client
const validateRequest = [
  body("student_id").not().isEmpty().isString(),
  body("name").not().isEmpty().isString(),
  body("gender").not().isEmpty().isString(),
  body("date_of_birth").not().isEmpty().isISO8601(),
  body("total_marks").not().isEmpty().isInt({ min: 0, max: 500 }),
  body("percentage").not().isEmpty().isFloat({ min: 0, max: 100 }),
  body("attendance").not().isEmpty().isFloat({ min: 0, max: 100 }),
];

router.post("/student/create", validateRequest, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors);
    }

    const {
      student_id,
      name,
      gender,
      date_of_birth,
      total_marks,
      percentage,
      attendance,
    } = req.body;

    // check student ID already exist in the database

    const isExist = await Student.findOne({ student_id });

    if (isExist) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Student Id already exist" }] });
    }

    // create a new student detail record

    const studentDetail = new Student({
      student_id,
      name,
      gender,
      date_of_birth,
      total_marks,
      percentage,
      attendance,
    });

    await studentDetail.save();

    res.status(201).send(studentDetail);
  } catch (error) {
    res.status(400).send({ errors: [{ msg: error.message }] });
  }
});

export { router as addDetailsRouter };
