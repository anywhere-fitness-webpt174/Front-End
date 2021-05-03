import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, FormGroup, Label, Input, Form, CardTitle } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";




export default function AddClass(props) {
  const { values, submit, update } = props;

  const history = useHistory();

  const initialFormValues = {
    class_name: "",
    class_type: "",
    class_start: "",
    class_duration: "",
    class_intensity: "",
    class_description: "",
    class_instructor: props.computedMatch.params.user,
  };

  const [addClassForm, setAddClassForm] = useState(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit();
    axiosWithAuth()
      .post(`/classes`, addClassForm)
      .then((res) => {
        console.log(res)
        history.push(`/${props.computedMatch.params.user}`);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const newAddClassForm = {
      ...addClassForm,
      [e.target.name]: e.target.value,
    };

    setAddClassForm(newAddClassForm);
  };

  return (
    <div>
        <div className="form-inputs">
          <h2>Add New Class</h2>
          <Form  className="add-class">
          <FormGroup>
            <Input
              type="text"
              name="class_name"
              placeholder="Type class name here"
              value={addClassForm.class_name}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="class_type"
              placeholder="Enter Class Type"
              value={addClassForm.class_type}
              onChange={handleChange}
            />

            <Input
              type="text"
              name="class_start"
              placeholder="Example date: 2021/01/01 12:00:00"
              value={addClassForm.class_start}
              onChange={handleChange}
            />
            <Input
              type="select"
              name="class_duration"
              value={addClassForm.class_duration}
              onChange={handleChange}
            >
              <option value="">--Class Duration--</option>
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="45">45 Minutes</option>
              <option value="60">60 Minutes</option>
            </Input>

            <Input
              type="select"
              name="class_intensity"
              value={addClassForm.class_intensity}
              onChange={handleChange}
            >
              <option value="">--Class Intesity--</option>
              <option value="1">1 (least intense)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 (most intense)</option>
            </Input>

            <Input
              type="textarea"
              name="class_description"
              value={addClassForm.class_description}
              onChange={handleChange}
              placeholder="Enter Description here"
            />
          </FormGroup>
          
          </Form>
          <div>
            <Button color="primary" onClick={handleSubmit}>Add Class</Button>
          </div>
          
        </div>
    </div>
  );
}
