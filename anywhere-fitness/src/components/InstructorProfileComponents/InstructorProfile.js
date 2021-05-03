import React from "react";
import InstructorProfileClassList from "./InstructorProfileClassList";
import { Route, Switch, useHistory } from "react-router-dom";
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
import AddClass from "../AddClass";
import { PrivateRoute } from "../PrivateRoute";
import InstructorEditClass from "./InstructorEditClass";

const InstructorProfile = (props) => {
  const history = useHistory();
  const { user_name, role, user_id } = props.user;

  const routeToAddClass = (e) => {
    e.preventDefault();
    history.push(`/${user_id}/addclass`);
  };
  return (
    <Switch>
      <Route path="/:user">
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
          </section>
          <section className="instructor-bottom">
            <InstructorProfileClassList
              classes={props.classes}
              userName={props.user.user_name}
              key={`user-${user_id}-classes`}
            />
          </section>
        </div>
      </Route>
    </Switch>
  );
};

export default InstructorProfile;
