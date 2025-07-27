import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDb } from "./src/db/index.js";

dotenv.config();
connectDb()

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening at the port ${port}`);
});
