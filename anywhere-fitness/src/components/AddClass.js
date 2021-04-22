import React from "react";
import styled from "styled-components";

// const StyledAddclass = styled.form`
//     display: flex;
// `

export default function AddClass(props) {
  const { values, submit, update } = props;

  const onSubmit = (evt) => {
      evt.preventDefault()
      submit()
  };

  const onChange = (evt) => {
      const { name, value } = evt.target;
      update(name, value)
  };

  return (
    <form>
      <div>
        <h2>Add a Class</h2>
        <label>
          <input
            type="text"
            name="className"
            placeholder="Class Name"
            value={values.className}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="classType"
            placeholder="Class Type"
            value={values.classType}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="startTime"
            placeholder="Start Time"
            value={values.startTime}
            onChange={onChange}
          />
        </label>
        <label>
          <select name="duration" value={values.duration} onChange={onChange}>
            <option value="">--Class Duration--</option>
            <option value="15">15 Minutes</option>
            <option value="30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value="60">60 Minutes</option>
          </select>
        </label>
        <label>
          <select name="intesity" value={values.intesity} onChange={onChange}>
            <option value="">--Class Intesity--</option>
            <option value="1">1 (least intense)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (most intense)</option>
          </select>
        </label>
        <label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={values.location}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="maxClassSize"
            placeholder="Max Class Size"
            value={values.maxClassSize}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
