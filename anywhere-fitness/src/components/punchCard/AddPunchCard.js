import React from "react";

export default function AddPunchCard(props) {
  const { update } = props;

  const onChange = (evt) => {
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
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Length"
          name="length"
          onChange={onChange}
        />
      </form>
      <div>
        <button>Add Punch</button>
      </div>
    </div>
  );
}
