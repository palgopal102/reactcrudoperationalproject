import React from "react";

const TableBody = ({
  setInputName,
  setInputContact,
  setInputSalary,
  setInputLocation,
  setToggleSubmit,
  arr,
  setArr,
  setIsEditData,
}) => {
  function edit(id) {
    let editing = arr.find((obj) => obj.id === id);
    let { inputName, inputContact, inputSalary, inputLocation } = editing;

    setInputName(inputName);
    setInputContact(inputContact);
    setInputSalary(inputSalary);
    setInputLocation(inputLocation);
    setIsEditData(id);
    setToggleSubmit(false);
  }

  function deleteData(id) {
    let temp = arr.filter((obj) => obj.id !== id);
    setArr(temp);
  }

  return (
    <tbody>
      {arr.map((obj) => {
        return (
          <tr key={obj.id}>
            <td>{obj.inputName}</td>
            <td>{obj.inputContact}</td>
            <td>{obj.inputSalary}</td>
            <td>{obj.inputLocation}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => edit(obj.id)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => deleteData(obj.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
