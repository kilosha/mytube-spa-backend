import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome back:)");
});

app.use("/api", routes);

// const db = mongoose.connect(
//     `${process.env.MONGO_CONNECTION_STRING}/${process.env.MONGO_DB_NAME}`,
//     () => console.log(`Connected to MongoDB ${process.env.MONGO_CONNECTION_STRING}/${process.env.MONGO_DB_NAME}`)
// );

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}/${process.env.MONGO_DB_NAME}`);
  console.log('connected');
}

main();

app.listen(process.env.PORT, () => { console.log(`Now server is listening on http://localhost:${process.env.PORT}`) });
