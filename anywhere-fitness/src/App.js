import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddClass from "./components/AddClass";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddPunchCard from "./components/punchCard/AddPunchCard";
import { PrivateRoute } from "./components/PrivateRoute";
import Classes from "./components/Classes";
import UserProfile from "./components/UserProfile";
import InstructorEditClass from "./components/InstructorProfileComponents/InstructorEditClass";

const initialFormValues = {
  class_name: "",
  class_type: "",
  class_start: "",
  class_duration: "",
  class_intensity: "",
  class_description: "",
  class_instructor: "",
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
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/:user/addclass" component={AddClass} />
        <PrivateRoute
          path="/:user/editclass/:classid"
          component={InstructorEditClass}
        />
        <PrivateRoute path="/class-list" />
        <PrivateRoute exact path="/:user" component={UserProfile} />
      </Switch>
    </div>
  );
}
