import connectDatabse from "./db/config.js";
import { students } from "./data/students.js";
import Student from "./src/model/studentModel.js";

connectDatabse();

const importData = async () => {
  try {
    await Student.deleteMany();
    await Student.insertMany(students);
    console.log("Imported data successfully ");
    process.exit();
  } catch (error) {
    console.log("Error importing data ", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Student.deleteMany();

    console.log("Destroyed Data");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
