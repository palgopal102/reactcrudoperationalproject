import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "../Operations/inputForm";
import Table from "../Operations/table";

function Add() {
  const [inputName, setInputName] = useState("");
  const [inputContact, setInputContact] = useState("");
  const [inputSalary, setInputSalary] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [arr, setArr] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditData, setIsEditData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      inputName &&
      inputContact &&
      inputSalary &&
      inputLocation &&
      !toggleSubmit
    ) {
      setArr(() => {
        let listOfData = arr.map((obj) => {
          if (obj.id === isEditData) {
            return {
              ...obj,
              inputName,
              inputContact,
              inputSalary,
              inputLocation,
            };
          }
          return obj;
        });
        return listOfData;
      });
      setInputName("");
      setInputContact("");
      setInputSalary("");
      setInputLocation("");
      setToggleSubmit(true);
      setIsEditData(null);
    } else if (inputName && inputContact && inputSalary && inputLocation) {
      let data = {
        id: uuidv4(),
        inputName,
        inputContact,
        inputSalary,
        inputLocation,
      };
      setArr([...arr, data]);
      setInputName("");
      setInputContact("");
      setInputSalary("");
      setInputLocation("");
    } else {
      alert("Please fill Form Properly");
    }
    <table table={arr} />;
  }

  return (
    <>
      <InputForm
        inputName={inputName}
        setInputName={setInputName}
        inputContact={inputContact}
        setInputContact={setInputContact}
        inputSalary={inputSalary}
        setInputSalary={setInputSalary}
        inputLocation={inputLocation}
        setInputLocation={setInputLocation}
        toggleSubmit={toggleSubmit}
        handleSubmit={handleSubmit}
      />
      <Table
        arr={arr}
        inputName={inputName}
        setInputName={setInputName}
        inputContact={inputContact}
        setInputContact={setInputContact}
        inputSalary={inputSalary}
        setInputSalary={setInputSalary}
        inputLocation={inputLocation}
        setInputLocation={setInputLocation}
        isEditData={isEditData}
        setIsEditData={setIsEditData}
        setToggleSubmit={setToggleSubmit}
        setArr={setArr}
      />
    </>
  );
}

export default Add;
