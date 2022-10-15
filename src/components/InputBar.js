import React, { useState } from "react";

export function InputBar(props) {
  const [task, setTask] = useState();
  let listTask = props.listTask;

  console.log("TASK", task);

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

  console.log("task", task);

  // const handleSetTask = (e) => {
  //   let lastTask = listTask[listTask.length - 1];
  //   let value = e.target.value;
  //   if (value) {
  //     setTask({
  //       id: !lastTask ? 1 : lastTask.id + 1,
  //       taskName: e.target.value,
  //       status: false,
  //     });
  //   }
  // };

  // const handleSumit = (e) => {
  //   let list = [...listTask];
  //   if (task && e.key === "Enter" && !list.includes(task)) {
  //     list.push(task);
  //   }
  //   props.setListTask(list);
  // };

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
