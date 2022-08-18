const express = require("express");
const { Student } = require("../Model/Model");
let router = express.Router();
const bcrypt = require("bcryptjs");
router.route("/sign").post((request, respond) => {
  const insertStudentData = async () => {
    const {
      Name,
      EmailId,
      MobileNo,
      Password,
      HouseNo,
      Street,
      State,
      Pincode,
    } = request.body;
    const cryptStudentPassoword = await bcrypt.hash(Password, 10);
    try {
      const data = {
        Name: Name,
        EmailId: EmailId,
        MobileNo: MobileNo,
        Password: cryptStudentPassoword,
        HouseNo: HouseNo,
        Street: Street,
        State: State,
        Pincode: Pincode,
      };
      const result = await Student.insertMany([data]);
      respond.json({
        response: true,
        data: result,
        message: "Registered successfully",
      });
    } catch (e) {
      respond.json({
        response: false,
        message: "student not registered",
        error: e,
      });
    }
  };
  insertStudentData();
});
router.route("/login").post((request, respond) => {
  const { EmailId, Password } = request.body;
  const isLogin = async (email, pass) => {
    try {
      const findStudent = await Student.findOne({ EmailId: email });
      const isMatch = await bcrypt.compare(pass, findStudent.Password);
      if (isMatch) {
        respond.json({ response: true, msg: "password matched" });
      } else {
        respond.json({ response: false, msg: "passowrd doesnot match" });
      }
    } catch (e) {
      console.log(e);
    }
  };
  isLogin(EmailId, Password);
});
module.exports = router;
