import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import "./loadEnvironment.js";
import routes from "./routes/root.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));

app.use(routes);
const port = process.env.PORT || 3000;

// import path from "path";
// app.use("/", express.static(path.join(__dirname, "/public")));

app.listen(port, () => console.log(`server running on ${port}`));
