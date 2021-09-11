import React from "react";

const inputForm = ({
  inputName,
  setInputName,
  inputContact,
  setInputContact,
  inputSalary,
  setInputSalary,
  inputLocation,
  setInputLocation,
  toggleSubmit,
  handleSubmit,
}) => {
  return (
    <div className="addItem">
      {toggleSubmit ? <h1>Add Your Details</h1> : <h1>EDIT Your Details</h1>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          Name=""
          value={inputName}
          placeholder="Enter Your Name..."
          onChange={(r) => setInputName(r.target.value)}
        />
        <input
          type="Number"
          Name=""
          value={inputContact}
          placeholder="Enter Your Contact..."
          onChange={(r) => setInputContact(r.target.value)}
        />
        <input
          type="Number"
          Name=""
          value={inputSalary}
          placeholder="Enter Your Salary..."
          onChange={(r) => setInputSalary(r.target.value)}
        />
        <input
          type="text"
          Name=""
          value={inputLocation}
          placeholder="Enter Your Location..."
          onChange={(r) => setInputLocation(r.target.value)}
        />
        {toggleSubmit ? (
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export default inputForm;
