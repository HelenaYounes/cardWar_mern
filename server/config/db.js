import mongoose from "mongoose";

const gameDB_Url = process.env.MONGODB_URL;

mongoose.connect(gameDB_Url);
let db = mongoose.connection.useDb("gamedb");

db.on("error", (err) => {
  console.log(err);
});
db.on("connected", (res) => {
  console.log("connected on game db");
});

export default db;
