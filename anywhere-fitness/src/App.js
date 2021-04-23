import React, { useState } from "react";
import AddClass from "./components/AddClass";
import SignUp from './components/SignUp'

const initialFormValues = {
  className: "",
  classType: "",
  startTime: "",
  duration: "",
  intesity: "",
  location: "",
  maxClassSize: "",
};

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [classes, setClasses] = useState([]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitNewClass = () => {
    const newClass = {
      className: formValues.className.trim(),
      classType: formValues.classType.trim(),
      startTime: formValues.startTime.trim(),
      duration: formValues.duration,
      intesity: formValues.intesity,
      location: formValues.location,
      maxClassSize: formValues.maxClassSize.trim(),
    };
    setClasses([...classes, newClass])
    setFormValues(initialFormValues)
  };



  return (
    <AddClass values={formValues} submit={submitNewClass} update={updateForm} />,
    <SignUp />
  );
}
