import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  total_marks: {
    type: Number,
    required: true,
    min: 0,
    max: 500,
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  attendance: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
