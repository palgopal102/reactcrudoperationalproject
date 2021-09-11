import React from "react";
import TableBody from "../Operations/tableBody";

function Table({
  arr,
  inputName,
  setInputName,
  inputContact,
  setInputContact,
  inputSalary,
  setInputSalary,
  inputLocation,
  setInputLocation,
  setToggleSubmit,
  setIsEditData,
  setArr,
}) {
  return (
    <>
      <div className="dataList">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Salary</th>
              <th>Location</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <TableBody
            arr={arr}
            inputName={inputName}
            setInputName={setInputName}
            inputContact={inputContact}
            setInputContact={setInputContact}
            inputSalary={inputSalary}
            setInputSalary={setInputSalary}
            inputLocation={inputLocation}
            setInputLocation={setInputLocation}
            setToggleSubmit={setToggleSubmit}
            setIsEditData={setIsEditData}
            setArr={setArr}
          />
        </table>
      </div>
    </>
  );
}

export default Table;
