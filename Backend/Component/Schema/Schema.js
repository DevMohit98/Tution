const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  Name: {
    type: String,
  },
  EmailId: {
    type: String,
  },
  MobileNo: {
    type: Number,
  },
  Password: {
    type: String,
  },
  HouseNo: {
    type: String,
  },
  Street: {
    type: String,
  },
  State: {
    type: String,
  },
  Pincode: {
    type: Number,
  },
});
const TeacherSchema = mongoose.Schema({
  Name: {
    type: String,
  },
  Password: {
    type: String,
  },
  Course: [
    {
      CourseName: {
        type: String,
      },
      BatchInfo: [
        {
          _id: false,
          CourseName: {
            type: String,
          },
          Timing: {
            type: Date,
          },
          NoOfSeat: {
            type: Date,
          },
        },
      ],
      _id: false,
    },
  ],
  Pincode: {
    type: String,
  },
  ContactNo: {
    type: Number,
  },
});
module.exports = { StudentSchema, TeacherSchema };
