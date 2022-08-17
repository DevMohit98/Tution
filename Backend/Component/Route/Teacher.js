const express = require("express");
const { Teacher } = require("../Model/Model");
let router = express.Router();
router.route("/sign").post((request, respond) => {
  const { Name, Passoword, Pincode, ContactNo } = request.body;
  const insertTeacherData = async () => {
    try {
      const data = {
        Name: Name,
        Passoword: Passoword,
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
  const { CourseName, Name, Duration } = request.body;
  const addBatchDetail = async () => {
    try {
      const result = await Teacher.updateMany(
        { Name: Name },
        {
          $push: {
            Course: {
              CourseName: CourseName,
              Duration: Duration,
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
module.exports = router;
