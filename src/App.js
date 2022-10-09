import './App.css';

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <div className="square">
        <form>
          <ul>
            <input type="text" id='write' placeholder='What needs to be done ?' />
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list" /></li>
            <li><input type="radio" value="list"/></li>
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
