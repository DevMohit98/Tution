const express = require("express");
const cors = require("cors");
const app = express();
// connection with databse & others
require("./Component/Connection/DB");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const Student = require("./Component/Route/Student");
const Teacher = require("./Component/Route/Teacher");
// rourtes
app.use("/student", Student);
app.use("/teacher", Teacher);
app.listen(8080, () => {
  console.log("server started");
});
