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
// middleware
const {
  StudentSignValidator,
  TeacherSignValidator,
  StudentLoginValidator,
  TeacherLoginValidator,
} = require("./Component/MiddleWare/Validation");
// rourtes
app.use("/student", StudentSignValidator, Student);
app.use("/teacher", TeacherSignValidator, Teacher);
app.use("/studentlogin", StudentLoginValidator, Student);
app.use("/teacherlogin", TeacherLoginValidator, Teacher);
app.listen(8080, () => {
  console.log("server started");
});
