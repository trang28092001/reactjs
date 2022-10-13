import "./App.css";
import React, { useEffect, useState } from "react";


function App() {
  const [task, setTask] = useState();
  const [listTask, setListTask] = useState([]);
  const [listTaskTmp, setListTaskTmp] = useState([]);
  const [titleBtn, setTitleBtn] = useState('All');

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
    if (task && e.key === "Enter" && !list.includes(task)) {
      list.push(task);
    }
    setListTask(list);
  };

  const toggleChange = (id, e) => {
    let temp = [...listTask];
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].status = !temp[i].status;
      }
    }
    setListTask(temp);
    if (titleBtn === 'All') {
      setListTaskTmp(temp)
    }
  }

  useEffect(() => {
    if (titleBtn === 'All') {
      setListTaskTmp(listTask)
    }
  }, [listTask, titleBtn])

  let fun = ["All", "Active", "Completed"];

  const handleClickBtn = (item, e) => {
    setTitleBtn(item)
  }

  useEffect(() => {
    let listClick;
    if (titleBtn === "Active") {
      listClick = listTaskTmp.filter(i => i.status === false);

    } else if (titleBtn === "Completed") {
      listClick = listTaskTmp.filter(i => i.status === true);
    }
    else {
      listClick = listTaskTmp.filter(i => (i.status === true || i.status === false));
    }
    setListTask(listClick);
  }, [titleBtn])

  const myList = fun.map((item) => (
    <button key={item} className="show" onClick={(e) => handleClickBtn(item, e)}>
      {item}
    </button>
  ));

  console.log("TASK", task);
  console.log("List task", listTask);
  console.log("List task tmp", listTask);


  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
        <input
          type="text"
          id="write"
          placeholder="What needs to be done?"
          // value={task.taskName}
          onChange={handleSetTask}
          onKeyPress={handleSumit}
        />
        {listTask.length > 0 &&
          listTask.map((task) => (
            <li key={task.id}>
              <input type="checkbox" className="button" name="checkBtn" checked={task.status} onChange={(e) => toggleChange(task.id, e)} />
              <label>{task.taskName}</label>
            </li>
          ))}
        {/* {listTask.length > 0 && ( */}
          <p className="end">
            <span>{listTask.length} item left</span>
            <span>{myList}</span>
          </p>
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
