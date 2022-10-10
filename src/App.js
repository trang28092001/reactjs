import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [task, setStask] = useState();

  const handleSetTask = (e) => {
    setStask(e.target.value);
  }

  const handleSumit = (e) =>{

    if (e.key === 'Enter') {
      this.setState({value:e.target.value})
    }
  }

  console.log("TASK", task);

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
        <form>
          <ul>
            <input 
              type="text" 
              id='write' 
              placeholder='What needs to be done ?' 
              // onChange={handleSetTask} 
              onKeyPress={handleSumit} />
             <li><input type="radio" value={task} /></li>
            {/* {task && <li><input type="radio" value={task} />{task}</li>} */}

            {/* <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list"/></li> */}
          </ul>
        </form>
        <p># item left</p>
        <p onClick="all">All</p>
        <p onClick="active">Active</p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
