import "./App.css";
import React, { useEffect, useState } from "react";
import { InputBar } from "./components/InputBar";
import { TodoList } from "./components/TodoList";
import { ButtonFilter } from "./components/ButtonFilter";

function App() {
  //const [task, setTask] = useState();
  const [listTask, setListTask] = useState([]);
  const [listTaskDisplay, setListTaskDisplay] = useState([]);
  const [titleBtn, setTitleBtn] = useState("All");

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

  useEffect(() => {
    let listTaskAfterFilter;
    if (titleBtn === "Active") {
      listTaskAfterFilter = listTask.filter((i) => i.status === false);
    } else if (titleBtn === "Completed") {
      listTaskAfterFilter = listTask.filter((i) => i.status === true);
    } else {
      listTaskAfterFilter = listTask.filter(
        (i) => i.status === true || i.status === false
      );
    }
    setListTaskDisplay(listTaskAfterFilter);
  }, [titleBtn, listTask]);

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="square">
        <InputBar createTodo={createTodo} />

        <TodoList
          listTaskDisplay={listTaskDisplay}
          setListTask={setListTask}
        />

        <ButtonFilter
          numberTask={listTaskDisplay.length}
          titleBtn={titleBtn}
          setTitleBtn={setTitleBtn}
        />
      </div>
    </div>
  );
}

export default App;
