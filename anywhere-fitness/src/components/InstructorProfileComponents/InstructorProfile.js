import React from "react";
import InstructorProfileClassList from "./InstructorProfileClassList";
import {useHistory}  from "react-router-dom";

const InstructorProfile = (props) => {
  
  const history = useHistory()

  const routeToClass = (e) => {
      e.preventDefault();
     history.push('./add-class')
  }

  return (
    <div className="instructor">
      <section className="instructor-top">
        <h1>INSTRUCTOR PROFILE COMPONENT</h1>
        <img src="https://i.pravatar.cc/300" className="profile-img" />
        <h3>Name: Test Profile </h3>
        <button onClick={routeToClass}>Add Class</button>
      </section>
      <section className="instructor-bottom">
          <InstructorProfileClassList/>
      </section>
    </div>
  );
};

export default InstructorProfile;
