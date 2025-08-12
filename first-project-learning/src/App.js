// import logo from "./logo.svg";
// import MyFirstComponent from "./MyFirstComponent"
// import Article from "./Article";
import "./App.css";
// import MyButton from "./MyButton";
// import MyInput from "./MyInput";
import MyForm from "./MyForm";
import { useState } from "react";

function App() {
  // const firstArticle = "I am a professional developer";
  // const secondArticle = `I am a trainee developer`;
  // const tasks = [
  //   {uniqueNum:1, title: "doing my homeworks"},
  //   {uniqueNum:2, title: "reading a book"},
  //   {uniqueNum:3, title: "studying"},
  //   {uniqueNum:4, title: "cleaning my room"},
  // ]
  // const myTasksList = tasks.map((task) =>{
  //   return(<li key={task.uniqueNum}>{task.title}</li>);
  // });
  const [deviceNameInp, setDeviceNameInp] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "Iphone" },
    { id: 2, name: "Huawie" },
    { id: 3, name: "Samsung" },
    { id: 4, name: "Oppo" },
  ]);
  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}
        <button
          onClick={() => {
            handleDeleteClick(device.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleEditClick(device.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });
  function handleEditClick(id) {
    const newDevices = devices.map((device) => {
      if (device.id == id) {
        let newDevice = { ...device, name: device.name + "0" };
        return newDevice;
      } else {
        return device;
      }
    });
    setDevices(newDevices)
  }
  function handleDeleteClick(id) {
    const newDevices = devices.filter((device) => {
      return device.id !== id;
    });
    setDevices(newDevices);
  }
  function handleAddClick() {
    setDevices([...devices, deviceNameInp]);
  }
  return (
    <div className="App">
      {devicesList}
      <div>
        <input
          value={deviceNameInp}
          onChange={(e) => {
            setDeviceNameInp(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            handleAddClick();
          }}
        >
          Add
        </button>
      </div>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <MyFirstComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Habiba Abdo Alzokm</h1>
        <div>
          <ul>{myTasksList}</ul>
        </div>
        <Article personName="Ammar" email="Ammar@gamail.com" content={firstArticle}>
          <h1>Hello World</h1>
        </Article>
        <Article personName="Habiba" email={"Habiba@gmail.com"} content={secondArticle}>
          <div style={{background: "teal"}}>
            <h2>Hello World</h2>
            <p style={{background: "orange"}}>kasnldfkhvoiru lskldnjfhgiueur  sdkghurahioej</p>
          </div>
        </Article>
        <Article personName={"M&H"} email="M&H@gmail.com">
          <h5>This is the content</h5>
          <hr></hr>
        </Article> */}
      {/* <MyButton /> */}
      {/* <MyInput /> */}
      {/* </header> */}
      <MyForm />
    </div>
  );
}
export default App;
