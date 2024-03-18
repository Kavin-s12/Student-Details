import mongoose from "mongoose";

const connectDatabse = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost/student");
    console.log("Student database connected ", connect.connection.host);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectDatabse;
