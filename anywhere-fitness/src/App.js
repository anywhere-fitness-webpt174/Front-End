import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddClass from "./components/AddClass";
import Header from "./components/Header";
import Class from "./components/Class";
import InstructorProfile from "./components/InstructorProfileComponents/InstructorProfile";
import InstructorEditClass from "./components/InstructorProfileComponents/InstructorEditClass";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ClientProfile from "./components/ClientProfile";
import AddPunchCard from "./components/punchCard/AddPunchCard";

const initialFormValues = {
  className: "",
  classType: "",
  startTime: "",
  duration: "",
  intesity: "",
  location: "",
  maxClassSize: "",
};

const classExample = {
  className: "Dance Class",
  classType: "Dancing",
  startTime: "3:30pm",
  duration: "30",
  intesity: "5",
  location: "miami",
  maxClassSize: "30",
};

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [classes, setClasses] = useState([classExample]);

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
    setClasses([...classes, newClass]);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/add-class">
          <AddClass
            values={formValues}
            submit={submitNewClass}
            update={updateForm}
          />
        </Route>
        <Route path="/class-list">
          {classes.map((aClass) => {
            return <Class details={aClass} />;
          })}
        </Route>
        <Route exact path="/instructor">
          <InstructorProfile/>
        </Route>
        <Route exact path="/editclass">
          <InstructorEditClass/>
        </Route>
      </Switch>
      
    </div>
      
  );
}
