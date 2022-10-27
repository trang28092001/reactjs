import React from "react";

export function TodoList(props) {
  let listTaskDisplay = props.listTaskDisplay;

  const toggleChange = (id, e) => {
    let temp = [...listTaskDisplay];
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].status = !temp[i].status;
      }
    }
    props.setListTask(temp);
  };

  return (
    <>
      {listTaskDisplay.length > 0 &&
        listTaskDisplay.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              className="button"
              name="checkBtn"
              checked={task.status}
              onChange={(e) => toggleChange(task.id, e)}
            />
            <label>{task.taskName}</label>
          </li>
        ))}
    </>
  );
}
