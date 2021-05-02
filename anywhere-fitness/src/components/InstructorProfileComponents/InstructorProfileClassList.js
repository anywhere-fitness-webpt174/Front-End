import React from "react";
import InstructorProfileClassData from "./InstructorProfileClassData";
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
} from "reactstrap";

const InstructorProfileClassList = (props) => {
  const history = useHistory();

  const routeToEditClass = (e) => {
    e.preventDefault();
    history.push("./editclass");
  };

  return (
    <div>
      {props.classes.map((aClass) => {
        const { class_name, class_type, class_description, class_duration } = aClass;
        return (
          <Card>
            <CardTitle>{class_type} class</CardTitle>
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
                <Button color="danger" size="sm">
                  X
                </Button>
                <Button color="warning" size="sm" onClick={routeToEditClass}>
                &#9998;
                </Button>
              </ButtonGroup>
            </CardBody>

            {/* <div className="class">
             
             

            <h5>Class Name: {class_name}</h5>
            <h5>Type: {class_type}</h5>
             <ButtonGroup>
                <Button color="danger" size="sm" >Delete</Button>{"    "}
                <Button color="warning" size="sm" onClick={routeToEditClass}>Edit</Button>
             </ButtonGroup>
          </div> */}
          </Card>
        );
      })}
    </div>
  );
};

export default InstructorProfileClassList;
