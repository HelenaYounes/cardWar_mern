import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const mongoDB_Url = process.env.MONGODB_URL;

mongoose.connect(mongoDB_Url);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.on("connected", (res) => {
  console.log("connected");
});
