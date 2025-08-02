import logo from "./logo.svg";
import MyFirstComponent from "./MyFirstComponent"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyFirstComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Habiba Abdo Alzokm</h1>
        <MyFirstComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyFirstComponent />
      </header>
    </div>
  );
}
export default App;
