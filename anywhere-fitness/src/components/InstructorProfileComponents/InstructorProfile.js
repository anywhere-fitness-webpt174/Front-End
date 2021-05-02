import React from "react";
import InstructorProfileClassList from "./InstructorProfileClassList";
import { useHistory } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from "reactstrap";

const InstructorProfile = (props) => {
  const history = useHistory();

  const routeToAddClass = (e) => {
    e.preventDefault();
    history.push("./add-class");
  };

  const { user_name, role } = props.user;

  return (
    <div className="instructor">
      <section className="instructor-top">
        <Card>
          <CardHeader>Welcome {user_name}</CardHeader>
          <CardImg
            top
            width="80%"
            src="https://i.pravatar.cc/300"
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle>Role: {role}</CardSubtitle>
            <CardText>Location: Los Angelos, CA</CardText>
            <Button color="primary" onClick={routeToAddClass}>
              Add Class
            </Button>
          </CardBody>
        </Card>
        {/* <img src="https://i.pravatar.cc/300" className="profile-img" />
        <h3>Name: {props.user.user_name} </h3>
        <button onClick={routeToClass}>Add Class</button> */}
      </section>
      <section className="instructor-bottom">
        <InstructorProfileClassList classes={props.classes} />
      </section>
    </div>
  );
};

export default InstructorProfile;
