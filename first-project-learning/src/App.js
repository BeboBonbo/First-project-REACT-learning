import logo from "./logo.svg";
// import MyFirstComponent from "./MyFirstComponent"
// import Article from "./Article";
import "./App.css";
// import MyButton from "./MyButton";
// import MyInput from "./MyInput";
import MyForm from "./MyForm"

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
  return (
    <div className="App">
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
