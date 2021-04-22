import React from "react";

export default function AddClass(props) {
  const {} = props;

  return (
    <form className="form container">
      <div>
        <h2>Add a Class</h2>
        <label>
          <input type="text" name="className" placeholder="Class Name" />
        </label>
        <label>
          <input type="text" name="classType" placeholder="Class Type" />
        </label>
        <label>
          <input type="text" name="startTime" placeholder="Start Time" />
        </label>
        <label>
          <select name="duration">
            <option value="">--Class Duration--</option>
            <option value="15">15 Minutes</option>
            <option value="30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value="60">60 Minutes</option>
          </select>
        </label>
        <label>
          <select name="intesityLevel">
            <option value="">--Class Intesity--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          <input type="text" name="location" placeholder="Location" />
        </label>
        <label>
          <input type="text" name="maxClassSize" placeholder="Max Class Size" />
        </label>
      </div>
    </form>
  );
}
