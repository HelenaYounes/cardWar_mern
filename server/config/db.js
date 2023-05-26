import mongoose from "mongoose";

const mongoDB_Url = process.env.MONGODB_URL;

mongoose.connect(mongoDB_Url);
let db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.on("connected", (res) => {
  console.log("connected");
});

export default db;
