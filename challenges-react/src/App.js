import Post from "./posts.js";
import NavBar from "./navbar.js";
import BtnSideSec from "./btnSideSection.js";
import "./App.css";

function App() {
  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    gap: 16,
    width: "60%",
  };
  const defaultTiltle = 'This is the post title';
  const defaultContent = "This is the post body";
  return (
    <div className="App">
      <NavBar />
      <div  style={{display: "flex", justifyContent: "center",}}>
        <section style={bodyStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "70%",
          }}
        >
          <Post content={"Features: FrontEnd - BackEnd - AI - MobileApp"}>
            <h3>20</h3>
            <h3>M&H</h3>
          </Post>
          <Post title={"Hello World"} content={"This is the hello world article"}/>
          <Post title={"Post 3"} content={"This is the body of post 3"}/>
          <Post title={defaultTiltle} content={defaultContent}/>
          <Post title={defaultTiltle} content={defaultContent}/>
          <Post title={defaultTiltle} content={defaultContent}/>
          <Post title={"Post 7"} content={"This is the body of post 7"}/>
        </div>
        <BtnSideSec />
      </section>
      </div>
      
    </div>
  );
}

export default App;
