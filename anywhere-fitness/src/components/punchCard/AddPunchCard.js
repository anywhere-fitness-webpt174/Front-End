import React from "react";

export default function AddPunchCard(props) {
  const { update } = props;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name of Punch"
          name="nameOfPunch"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Length"
          name="length"
          onChange={handleChange}
        />
      </form>
      <div>
        <button>Add Punch</button>
      </div>
    </div>
  );
}
