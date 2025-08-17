import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";
import NotFound from "./NotFound";
import PostLayout from "./PostLayout";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
function App() {
  let postsData = [
    { id: 1, title: "Hello World", body: "265akshdjri lskadhjfur sdklhguryhr" },
    { id: 2, title: "Second Post", body: "eurij lskadhjfur sdklhguryhr4123" },
    { id: 3, title: "Third Post", body: "slkdhuierj lskadhjfur 83sdklhguryhr" },
  ];
  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        <div>
          <Link to="/">
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>
          <Link to="/hello">
            <button style={{ fontSize: "30px" }}>Hello</button>
          </Link>
          <Link to="/posts">
            <button style={{ fontSize: "30px" }}>Posts</button>
          </Link>
        </div>

        <Routes>
          <Route path="/hello" element={<Hello />} />

          <Route path="/posts" element={<PostLayout />}>
            <Route index element={<PostsList />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
