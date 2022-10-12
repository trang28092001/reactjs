import "./App.css";
import React, { useState } from "react";


function App() {
  const [task, setTask] = useState();
  const [listTask, setListTask] = useState([]);

  const handleSetTask = (e) => {
    let lastTask = listTask[listTask.length - 1];
    let value = e.target.value;
    if (value) {
      setTask({
        id: !lastTask ? 1 : lastTask.id + 1,
        taskName: e.target.value,
        status: false,
      });
    }
  };

  const handleSumit = (e) => {
    let list = [...listTask];
    if (task && e.key === "Enter") {
      list.push(task);
    }
    setListTask(list);
    // setTask(" ");
    
  };

   const toggleChange = () => {
      setTask({
      isChecked: !task.status,
    });
  }

  let fun = ["All", "Active", "Completed"];

  const myList = fun.map((item) => (
    <button key={item} className="show">
      {item}
    </button>
  ));

  console.log("TASK", task);
  console.log("List task", listTask);


  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
        <input
          type="text"
          id="write"
          placeholder="What needs to be done?"
          // value={""}
          onChange={handleSetTask}
          onKeyPress={handleSumit}
        />
        {listTask.length > 0 &&
          listTask.map((task) => (
            <li key={task.id}>
               <input type="checkbox" className="button" value={task.taskName} name= "checkBtn" checked = {task.status} onChange= {toggleChange}/>
              <label>{task.taskName}</label>
            </li>
          ))}
        {listTask.length > 0 && (
          <p className="end">
            <span>{listTask.length} item left</span>
            <span>{myList}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
