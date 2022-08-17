const mongoose = require("mongoose");
const { StudentSchema, TeacherSchema } = require("../Schema/Schema");
const Student = new mongoose.model("Student", StudentSchema);
const Teacher = new mongoose.model("Teacher", TeacherSchema);
module.exports = { Student, Teacher };
