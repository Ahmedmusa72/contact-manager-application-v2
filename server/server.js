const dotenv = require("dotenv").config();
const express = require("express");
const usersRoute = require("./routes/usersRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/users", usersRoute);

// BUILDING default route
app.get("/", (req, res) => {
  res.send("home page");
});
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});
