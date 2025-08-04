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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <BtnSideSec />
      </section>
      </div>
      
    </div>
  );
}

export default App;
