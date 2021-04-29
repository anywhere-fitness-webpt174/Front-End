import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddClass from "./components/AddClass";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ClientProfile from "./components/ClientProfile";

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
    setClasses([...classes, newClass]);
    setFormValues(initialFormValues);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <AddClass values={formValues} submit={submitNewClass} update={updateForm} /> */}
          {/* <Route path="/class-list">
          {classes.map((aClass) => {
            return <Class details={aClass} />; */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Login />
        </Switch>
      </div>
    </Router>
  );
}
