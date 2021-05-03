import React from "react";
import InstructorProfileClassData from "./InstructorProfileClassData";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const InstructorProfileClassList = (props) => {
  const history = useHistory();

  const url = useRouteMatch()

  const instructor_classes = props.classes.filter(
    (aClass) => aClass.class_instructor === props.userName
  );

  const routeToEditClass = (e) => {
    e.preventDefault();
    console.log(url);
    history.push(`/${url.params.user}/editclass/${e.target.value}`);
  };

  return (
    <div>
      {instructor_classes.map((aClass) => {
        const {
          class_name,
          class_type,
          class_description,
          class_duration,
          class_intensity,
          class_id,
        } = aClass;
        return (
          <Card key={class_id}>
            <CardTitle>
              {class_type} class - {class_intensity} Level
            </CardTitle>
            <CardImg
              top
              width="80%"
              height="50%"
              src="https://www.active.com/Assets/Fitness/group-fitness-benefits.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{class_name}</CardTitle>
              <CardSubtitle>{class_duration}</CardSubtitle>
              <CardText>{class_description} </CardText>
              <ButtonGroup>
                <Button color="danger" size="sm" value={class_id}>
                  X
                </Button>
                <Button color="warning" size="sm" onClick={routeToEditClass} value={class_id}>
                  &#9998;
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default InstructorProfileClassList;
