import React, { useState, useEffect } from "react";

const mockClassData = {
  className: "Pro Pilates",
  classType: "Pilates",
  time: "10:00 am",
  duration: "60",
  level: "3",
  location: "San Diego",
  bookedAttendees: "20",
  maxAttendees: "20",
};

const mockPunchPass = [
    {
        passName:"Single Pass",
        price: "15",
        type: "Punch Card"
    },
    {
        passName:"1 month unlimited",
        price: "60",
        type: "Unlimited"
    }
]

const InstructorEditClass = () => {
  const [classEditForm, setClassEditForm] = useState({
    className: "",
    classType: "",
    time: "",
    duration: "",
    level: "",
    location: "",
    bookedAttendees: "",
    maxAttendees: "",
  });

  const [passData, setPassData] = useState([]);
 
  useEffect(() => {
    setClassEditForm(mockClassData);
    setPassData(mockPunchPass)
  }, []);

  const changeHandle = (e) => {
    const newClassEditForm = {
      ...classEditForm,
      [e.target.name]: e.target.value,
    };

    setClassEditForm(newClassEditForm);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    //   axios.put('url/{class.id}', classEditForm )
    //   .then(res => {
    //     setClassEditForm(res.data)
    //   })
    //   .catch(err => console.log(err.response.message))
    
    //mock the update action, delete once the actual axios call is working
    setClassEditForm({
      className: "New Pilates",
      classType: "Pilates",
      time: "10:00 am",
      duration: "70",
      level: "3",
      location: "San Diego",
      bookedAttendees: "22",
      maxAttendees: "25",
    });
  };

  return (
    <div className="class-edit">
       
      <section className="class-details">
        <h2>Class Details</h2>
        <form action="" className="form" onSubmit={submitHandle}>
          <label htmlFor="">Class Name</label>
          <input
            type="text"
            name="className"
            value={classEditForm.className}
            onChange={changeHandle}
          />
          <label htmlFor="">Class Type</label>
          <input
            type="text"
            name="classType"
            value={classEditForm.classType}
            onChange={changeHandle}
          />
          <label htmlFor="">Time</label>
          <input
            type="text"
            name="time"
            value={classEditForm.time}
            onChange={changeHandle}
          />
          <label htmlFor="">{`Duration(mins)`}</label>
          <input
            type="text"
            name="duration"
            value={classEditForm.duration}
            onChange={changeHandle}
          />
          <label htmlFor="">Level</label>
          <input
            type="text"
            name="level"
            value={classEditForm.level}
            onChange={changeHandle}
          />
          <label htmlFor="">Location</label>
          <input
            type="text"
            name="location"
            value={classEditForm.location}
            onChange={changeHandle}
          />
          <label htmlFor="">Booked Attendees</label>
          <input
            type="text"
            name="bookedAttendees"
            value={classEditForm.bookedAttendees}
            onChange={changeHandle}
          />
          <label htmlFor="">Max Attendees</label>
          <input
            type="text"
            name="maxAttendees"
            value={classEditForm.maxAttendees}
            onChange={changeHandle}
          />
          <button> Save From</button>
        </form>
      </section>

      <section className="punch-passes">
         
         <h2>Passes</h2>
        {passData.map(pass => {
            return (
                <div className = "pass">
                    <h3>{pass.passName}</h3>
                    <h4>Price: ${pass.price}</h4>
                    <h4>Type: ${pass.type}</h4>
                </div>
            )
        })}
        <button className="button"> Add Pass</button>
      </section>
    </div>
  );
};

export default InstructorEditClass;
