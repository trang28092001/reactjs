import React, { useState } from "react";

export function InputBar(props) {
  const [task, setTask] = useState();
  
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  
  const handleSubmit = () => {
    props.createTodo(task);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task != "") {
      handleSubmit();
      setTask("");
    }
  };

  return (
    <input
      type="text"
      id="write"
      placeholder="What needs to be done?"
      value={task}
      onChange={handleChange}
      onKeyPress={handleKeyDown}
    />
  );
}
