import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Express server running on port: ${port}`);
});
