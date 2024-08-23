import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
    console.log(`\n MongoDB Connected !! MongoDB Host :${connectInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connected Filed", error);
    process.exit(1);
  }
};


export default connectDB ;
// ${process.env.MONGODB_URI}/${DB_NAME}