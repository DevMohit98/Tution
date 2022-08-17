import React, { useState } from "react";
import axios from "axios";
const Teacher = () => {
  const [TeacherInfo, setTeacherInfo] = useState({
    Name: "",
    Password: "",
    Pincode: "",
    ContactNo: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTeacherInfo({
      ...TeacherInfo,
      [name]: value,
    });
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/teacher/sign", TeacherInfo)
      .then((res) => {
        console.log(res.data.data);
        window.location = `/center/name=${TeacherInfo.Name}`;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          className="form-control m-3"
          placeholder="enter name of organization"
          value={TeacherInfo.Name}
          name="Name"
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control  m-3"
          placeholder="enter your password"
          value={TeacherInfo.Password}
          onChange={handleChange}
          name="Password"
        />
        <input
          type="number"
          className="form-control  m-3"
          placeholder="enter your pincode"
          name="Pincode"
          value={TeacherInfo.Pincode}
          onChange={handleChange}
        />
        <input
          type="number"
          className="form-control  m-3"
          placeholder="enter your contactno"
          name="ContactNo"
          value={TeacherInfo.ContactNo}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </>
  );
};
export default Teacher;
