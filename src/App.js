import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [task, setTask] = useState();
  const [listTask, setListTask] = useState([]);

  const handleSetTask = (e) => {
    setTask(e.target.value);
  }

  const handleSumit = (e) =>{
    let list = [...listTask]
    if (e.key === 'Enter') {
      list.push(task);
    }
    setListTask(list);
  }
  // console.log("TASK", task);
  // console.log('List task', listTask)

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
          <input 
            type="text" 
            id='write' 
            placeholder='What needs to be done?' 
            onChange={handleSetTask} 
            onKeyPress={handleSumit} />
          {listTask.length > 0 && listTask.map((item) => <li><input type="radio" className='button' />{item}</li>)}
      </div>
    </div>
  );
}

export default App;
