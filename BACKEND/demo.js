const express = require("express");
const mongoose = require("mongoose");
const quizRoutes = require("./routes/quizRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/quizapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/quizzes", quizRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
