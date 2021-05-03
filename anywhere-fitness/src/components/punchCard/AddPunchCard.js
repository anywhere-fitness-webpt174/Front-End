import React, { useState } from "react";
import { Button } from "reactstrap";

export default function AddPunchCard(props) {
  

  const [addPassData, setAddPassData] = useState(
    {
      pass_id: "",
      pass_name: "",
      pass_price: "",
      pass_type: "",
    }
  )

  const handleChange = (e) => {

    const newAddPassData = {
      ...addPassData,
      pass_id:Date.now(),
      [e.target.name]: e.target.value,
    }

    setAddPassData(newAddPassData);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsAddingPass(false);
    props.addNewPunch(addPassData);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Pass"
          name="pass_name"
          onChange={handleChange}
          value={addPassData.pass_name}
        />
        <input
          type="text"
          placeholder="Price of Pass"
          name="pass_price"
          onChange={handleChange}
          value={addPassData.pass_price}
        />
        <input
          type="text"
          placeholder="Type of Pass"
          name="pass_type"
          onChange={handleChange}
          value={addPassData.pass_type}
        />
        <div>
          <Button color="primary" size="sm">
            Add New Pass
          </Button>
        </div>
      </form>
    </div>
  );
}
