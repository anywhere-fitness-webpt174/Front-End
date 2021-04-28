import React from "react";
import InstructorProfileClassData from "./InstructorProfileClassData";

import { useHistory } from "react-router-dom";

const InstructorProfileClassList = (props) => {
  const history = useHistory();
  const routeToEditClass = (e) => {
    e.preventDefault();
    history.push("./editclass");
  };

  return (
    <div>
      {InstructorProfileClassData.map((instructorClasses) => {
        const { instructorClass, location, attendees } = instructorClasses;
        return (
          <div className="class">
            <h5>Class Name: {instructorClass}</h5>
            <h5>Location: {location}</h5>
            <h5>Attendees: {attendees}</h5>
            <button>--Red X Button---</button>
            <button onClick={routeToEditClass}>Edit Class Button</button>
          </div>
        );
      })}
    </div>
  );
};

export default InstructorProfileClassList;
