import { useState } from "react";
//for form inputs
export default initialState => {
  const [value, setvalue] = useState(initialState);
  const handleChange = e => {
    setvalue(e.target.value);
  };
  const reset = val => {
    setvalue(val);
  };
  return [value, handleChange, reset];
};
