import { useState, useRef } from "react";
import "./App.css";

export default function FormData() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

   function handleChange(e){
    setValue(e.target.value);
   }   

   function submitName(e){
    inputRef.current.focus();
    e.preventDefault();
    console.log(value);
    setValue('');
   }

  return (
    <form onSubmit={submitName}>
        <label>Enter the name:</label>
        <input type="text" value={value} ref={inputRef} onChange={handleChange}></input>
        <button type="submit">Submit</button>
    </form>
  )
}
