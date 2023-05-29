import mongoose from "mongoose";

const cardsDB_Url = process.env.MONGODB_URL_CARDS;
const playersDB_Url = process.env.MONGODB_URL_PLAYERS;
const decksDB_Url = process.env.MONGODB_URL_DECKS;

const dbCardsConnection = mongoose.createConnection(cardsDB_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbPlayersConnection = mongoose.createConnection(playersDB_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbDecksConnection = mongoose.createConnection(decksDB_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbCardsConnection.on("error", (err) => {
  console.log(err);
});
dbCardsConnection.on("connected", (res) => {
  console.log("connected on cards db");
});
dbDecksConnection.on("error", (err) => {
  console.log(err);
});
dbDecksConnection.on("connected", (res) => {
  console.log("connected on decks db");
});
dbPlayersConnection.on("error", (err) => {
  console.log(err);
});
dbPlayersConnection.on("connected", (res) => {
  console.log("connected on player db");
});
export { dbCardsConnection, dbDecksConnection, dbPlayersConnection };
