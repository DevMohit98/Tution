const express = require("express");
const { Teacher } = require("../Model/Model");
let router = express.Router();
const bcrypt = require("bcryptjs");
router.route("/sign").post((request, respond) => {
  const { Name, Password, Pincode, ContactNo } = request.body;
  const insertTeacherData = async () => {
    const cryptTeacherPassword = await bcrypt.hash(Password, 10);
    try {
      const data = {
        Name: Name,
        Password: cryptTeacherPassword,
        Pincode: Pincode,
        ContactNo: ContactNo,
      };
      const result = await Teacher.insertMany([data]);
      respond.json({
        response: true,
        data: result,
        message: "Teacher registerd successfully",
      });
    } catch (e) {
      respond.json({
        response: false,
        message: "Teacher not registered",
      });
    }
  };
  insertTeacherData();
});
router.route("/batch").post((request, respond) => {
  const { CourseName, Name, Timing, TotalNo } = request.body;
  const addBatchDetail = async () => {
    try {
      const result = await Teacher.updateMany(
        { Name: Name },
        {
          $push: {
            Course: {
              CourseName: CourseName,
              BatchInfo: {
                CourseName: CourseName,
                Timing: Timing,
                TotalNo: TotalNo,
              },
            },
          },
        }
      );
      respond.json({ result });
    } catch (e) {
      console.log(e);
    }
  };
  addBatchDetail();
});
router.route("/detail").get((request, respond) => {
  const findData = async () => {
    const findAllDetail = await Teacher.find(
      {},
      { _id: 0, Name: 1, Course: 1 }
    );
    respond.json({ repsonse: true, data: findAllDetail });
  };
  findData();
});
router.route("/login").post((request, respond) => {
  const { Name, Password } = request.body;
  const isLogin = async (name, pass) => {
    try {
      const FindTeacher = await Teacher.findOne({ Name: name });
      console.log(FindTeacher.Password);
      const isMatch = await bcrypt.compare(pass, FindTeacher.Password);
      if (isMatch) {
        respond.json({ response: true, msg: "password matched" });
      } else {
        respond.json({ response: false, msg: "passowrd doesnot match" });
      }
    } catch (e) {
      console.log(e);
    }
  };
  isLogin(Name, Password);
});
module.exports = router;
