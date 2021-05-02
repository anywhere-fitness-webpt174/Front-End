import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddClass from "./components/AddClass";
import Header from "./components/Header";
import Class from "./components/Class";
import InstructorProfile from "./components/InstructorProfileComponents/InstructorProfile";
import InstructorEditClass from "./components/InstructorProfileComponents/InstructorEditClass";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddPunchCard from "./components/punchCard/AddPunchCard";
import { PrivateRoute } from "./components/PrivateRoute";
import Classes from "./components/Classes";
import UserProfile from "./components/UserProfile";
import ClientProfile1 from "./components/ClientProfile1";

import ClientProfile from "./components/ClientProfile.jsx";
import { connect } from "react-redux";

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
  class_id: "10",
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
        <Route path="/login" component={Login} />

        <Route path="/signup" component={SignUp} />

        <PrivateRoute
          path="/add-class"
          component={AddClass}
          values={formValues}
          submit={submitNewClass}
          update={updateForm}
        />
        <PrivateRoute
          path="/class-list"
          component={Classes}
          classes={classes}
        />

        <PrivateRoute exact path="/:user" component={UserProfile} />
      </Switch>
    </div>
  );
}




