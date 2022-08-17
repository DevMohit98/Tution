const express = require("express");
const { Student } = require("../Model/Model");
let router = express.Router();
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

    try {
      const data = {
        Name: Name,
        EmailId: EmailId,
        MobileNo: MobileNo,
        Password: Password,
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
    } catch {
      respond.json({ response: false, message: "student not registered" });
    }
  };
  insertStudentData();
});
module.exports = router;
