import './App.css';
import React, { useState } from 'react';
import { getAllByAltText } from '@testing-library/react';

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
    setTask('')
  }
  
  let fun = ["All", "Active", "Completed"];

  const myList = fun.map((item) =>(<button key = {item} className='show' >{item}</button>));
  
  console.log("TASK", task);
  console.log('List task', listTask)

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
          {listTask.length > 0 && listTask.map((tag) => (<li key = {tag}><input type="radio" className='button' />{tag}</li>))}
          {listTask.length > 0 && <p className='end'>
            <span >{listTask.length} item left</span>
            <span>{myList}</span>
          </p>}
      </div>
    </div>
  );
}

export default App;
