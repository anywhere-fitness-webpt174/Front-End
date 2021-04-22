import React, { useState } from "react";
import AddClass from "./components/AddClass";

const initialFormValues = {
  className: "example",
  classType: "example",
  startTime: "3:30",
  duration: "15",
  intesity: "5",
  location: "here",
  maxClassSize: "1 million",
};

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  return <AddClass values={formValues}/>;
}
