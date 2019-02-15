import express from "express";
import bodyParser from "body-parser";
import router from "./Routes/meal.route";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("The API is set");
});

app.use("/api/v1/meals", router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
