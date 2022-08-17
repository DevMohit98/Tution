import React, { useState } from "react";
import { useParams } from "react-router-dom";
const AdditionalData = () => {
  const { name } = useParams();
  const [Additional, setAdditional] = useState({
    CourseName: "",
    Timing: "",
    TotalNo: "",
  });
  const HandleAdditional = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdditional({
      ...Additional,
      [name]: value,
    });
  };
  const HandleAdditionalSubmit = (event) => {
    event.preventDefault();
    console.log(Additional);
  };
  return (
    <>
      <h1>AdditionalData of {name}</h1>
      <form onSubmit={HandleAdditionalSubmit}>
        <input
          type="text"
          className="form-control m-3"
          placeholder="enter name of organization"
          value={Additional.CourseName}
          name="CourseName"
          onChange={HandleAdditional}
        />
        <input
          type="date"
          className="form-control"
          name="Timing"
          value={Additional.Timing}
          onChange={HandleAdditional}
        />
        <input
          type="number"
          placeholder="enter no of seat"
          className="form-control"
          name="TotalNo"
          value={Additional.TotalNo}
          onChange={HandleAdditional}
        />
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
    </>
  );
};
export default AdditionalData;
