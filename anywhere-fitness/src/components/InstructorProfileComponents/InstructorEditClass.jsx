import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClasses, updateClasses } from "../../actions";
import { Button, FormGroup, Label, Input, Form, CardTitle } from "reactstrap";
import AddPunchCard from "../punchCard/AddPunchCard";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const InstructorEditClass = (props) => {
  const selectedClass = props.classes.find(
    (aClass) => props.computedMatch.params.classid == aClass.class_id
  );

  const [classEditForm, setClassEditForm] = useState(selectedClass);

  const [passData, setPassData] = useState([]);

  const [isAddingPass, setIsAddingPass] = useState(false);

  const {classid} = props.computedMatch.params;


  useEffect(() => {
    //console.log(classEditForm);
    console.log(props.fetchClasses());
    setPassData(props.passes);
  }, []);

  const changeHandle = (e) => {
    const newClassEditForm = {
      ...classEditForm,
      [e.target.name]: e.target.value,
    };

    setClassEditForm(newClassEditForm);
  };

  const submitNewClass = (e) => {
    e.preventDefault();
    const newClassDataArr = [classEditForm]
    console.log(newClassDataArr);
    const updatedClassArr = props.classes.map(aClass => {
      return newClassDataArr.find(theClass => theClass.class_id === aClass.class_id || aClass)
    })
   
    props.updateClasses(updatedClassArr);
  };

  const addPunch = (e) => {
    e.preventDefault();
    setIsAddingPass(true);
  };

  const addNewPunch = (newPass) => {
    const newPassData = [...passData, newPass];
    setPassData(newPassData);
  };

  return (
    <div>
      <div className="class-edit">
        <section className="class-details">
          <h2>Class Details</h2>
          <Form className="edit-class">
            <FormGroup>
              <Input
                type="text"
                name="class_name"
                placeholder="Type class name here"
                value={classEditForm.class_name}
                onChange={changeHandle}
              />
              <Input
                type="text"
                name="class_type"
                placeholder="Enter Class Type"
                value={classEditForm.class_type}
                onChange={changeHandle}
              />

              <Input
                type="text"
                name="class_start"
                placeholder="Example date: 2021/01/01 12:00:00"
                value={classEditForm.class_start}
                onChange={changeHandle}
              />
              <Input
                type="select"
                name="class_duration"
                value={classEditForm.class_duration}
                onChange={changeHandle}
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
                value={classEditForm.class_intensity}
                onChange={changeHandle}
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
                value={classEditForm.class_description}
                onChange={changeHandle}
                placeholder="Enter Description here"
              />
            </FormGroup>
          </Form>
           <div>
              <Button color="primary" size="sm" onClick={submitNewClass}>
                Save Changes
              </Button>
            </div>
        </section>

        <section className="punch-passes">
          <h2>Passes</h2>
          {passData.map((pass) => {
            return (
              <div className="pass">
                <h5>{pass.pass_name}</h5>
                <h5>Price: ${pass.pass_price}</h5>
                <h5>Type: ${pass.pass_type}</h5>
              </div>
            );
          })}

          <Button
            color="primary"
            size="sm"
            className="button"
            onClick={addPunch}
          >
            Add Pass
          </Button>
        </section>
      </div>
      {isAddingPass ? (
        <div className="add-punch">
          <h4>Add New Punch Card below</h4>
          <AddPunchCard
            addNewPunch={addNewPunch}
            setIsAddingPass={setIsAddingPass}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    passes: state.passes,
  };
};

export default connect(mapStateToProps, { fetchClasses, updateClasses  })(InstructorEditClass);
