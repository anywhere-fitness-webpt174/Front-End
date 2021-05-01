import React from "react";
// import Class from "./Class";

export default function ClientProfile(props) {
  const { update } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  return (
    <div>
      <div>
        <img src="https://i.redd.it/iwcfps3g83tz.jpg"></img>
      </div>
      <h2>Name: ClientProfile</h2>
      <div>
        <form>
          <select name="classTime" placeholder="Class Time" onChange={onChange}>
            <option value="">--Select Time--</option>
            <option value="morning">Morning</option>
            <option value="noon">Noon</option>
            <option value="night">Night</option>
          </select>
          <select name="classDate" placeholder="Class Date" onChange={onChange}>
            <option value="">--Select Date--</option>
            <option value="thisMonth">This Month</option>
            <option value="nextMonth">Next Month</option>
            <option value="nah">No Thanks</option>
          </select>
          <select
            name="classDuration"
            placeholder="Class Duration"
            onChange={onChange}
          >
            <option value="">--Class Duration--</option>
            <option value="15">15 Minutes</option>
            <option value="30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value="60">60 Minutes</option>
          </select>
          <select name="classType" placeholder="Class Type" onChange={onChange}>
            <option value="">--Class Type--</option>
            <option value="cycling">Cycling</option>
            <option value="dance">Dance</option>
            <option value="HIT">HIT</option>
            <option value="yoga">Yoga</option>
            <option value="pilaties">Pilaties</option>
          </select>
          <select
            name="intesity"
            placeholder="Intesity Level"
            onChange={onChange}
          >
            <option value="">--Class Intesity--</option>
            <option value="1">1 (least intense)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (most intense)</option>
          </select>
          <select
            name="location"
            placeholder="Class Location"
            onChange={onChange}
          >
            <option value="">--Location--</option>
            <option value="here">Here</option>
            <option value="there">There</option>
            <option value="anywhere">Anywhere</option>
          </select>
          <div>
            <button>Search Classes</button>
          </div>
        </form>
      </div>
      <div>
        <h1>My Classes</h1>
        <div>
          {/* pull in classes from state her and return Classes */}
          {/* {classes.map((aClass) => {
                return <Class details={aClass} />
            })} */}
        </div>
      </div>
    </div>
  );
}
