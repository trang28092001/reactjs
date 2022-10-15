import "./App.css";
import React, { useEffect, useState } from "react";
import { InputBar } from "./components/InputBar";
import { TodoList } from "./components/TodoList";
import { ButtonFilter } from "./components/ButtonFilter";

function App() {
  //const [task, setTask] = useState();
  const [listTask, setListTask] = useState([]);
  const [titleBtn, setTitleBtn] = useState("All");

  console.log("List task", listTask);
  console.log("List task tmp", listTask);

  const createTodo = (task) => {
    let temp = [...listTask];
    let lastTask = temp[temp.length - 1];
    let newTask = {
      id: !lastTask ? 1 : lastTask.id + 1,
      taskName: task,
      status: false,
    };
    if (!temp.includes(newTask)) {
      temp.push(newTask);
      setListTask(temp);
    }
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
        <InputBar createTodo={createTodo} />

        <TodoList
          titleBtn={titleBtn}
          setTitleBtn={setTitleBtn}
          listTask={listTask}
          setListTask={setListTask}
        />

        <ButtonFilter
          titleBtn={titleBtn}
          setTitleBtn={setTitleBtn}
          listTask={listTask}
          setListTask={setListTask}
        />
      </div>
    </div>
  );
}

export default App;
