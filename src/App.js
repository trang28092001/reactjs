import "./App.css";
import React, { useEffect, useState } from "react";
import { InputBar } from "./components/InputBar";
import {TodoList} from "./components/TodoList";
import { ButtonFilter } from "./components/ButtonFilter";

function App() {
  //const [task, setTask] = useState();
  const [listTask, setListTask] = useState([]);
  const [titleBtn, setTitleBtn] = useState('All');

 
  console.log("List task", listTask);
  console.log("List task tmp", listTask);


  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
        <InputBar listTask={listTask} setListTask={setListTask}/>
      
        <TodoList titleBtn={titleBtn} setTitleBtn={setTitleBtn} listTask={listTask} setListTask={setListTask} />
        
        <ButtonFilter titleBtn={titleBtn} setTitleBtn={setTitleBtn} listTask={listTask} setListTask={setListTask}/>
        
      </div>
    </div>
  );
}

export default App;
