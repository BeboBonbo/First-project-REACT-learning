// import Post from "./posts.js";
// import NavBar from "./navbar.js";
// import BtnSideSec from "./btnSideSection.js";
// import "./App.css";
//! import Scoreboard from "./objectStateProblemInDocs";
//? import ShoppingCart from "./UpdatingArrayInState"
import RequestTracker from "./repeatedUpdateOfArray";

// const showCategories = true;

function App() {
  //! return <Scoreboard />;
  //? return(<ShoppingCart />)
  return(<RequestTracker />)
  // const bodyStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "start",
  //   gap: 16,
  //   width: "60%",
  // };
  // const posts = [
  //   {
  //     id: 1,
  //     title: "M&H",
  //     content: "Features: FrontEnd - BackEnd - AI - MobileApp",
  //   },
  //   { id: 2, title: "Hello World", content: "This is the hello world article" },
  //   { id: 3, title: "Post 3", content: "This is the body of post 3" },
  //   { id: 4, title: "This is the post title", content: "This is the post body" },
  //   { id: 5, title: "This is the post title", content: "This is the post body" },
  //   { id: 6, title: "This is the post title", content: "This is the post body" },
  //   { id: 7, title: "Post 7", content: "This is the body of post 7" },
  // ];
  // const postsComponents = posts.map((post) => {
  //   return <Post key={post.id} title={post.title} content={post.content} />;
  // });

  // return (
  //   <div className="App">
  //     <NavBar />
  //     <div style={{ display: "flex", justifyContent: "center" }}>
  //       <section style={bodyStyle}>
  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             gap: "1rem",
  //             width: "70%",
  //           }}
  //         >
  //           {postsComponents}
  //         </div>
  //         <AppSideMenu />
  //       </section>
  //     </div>
  //   </div>
  // );
}

// function AppSideMenu() {
//   if (showCategories == true) {
//     return <BtnSideSec />;
//   } else {
//     return null;
//   }
// }

export default App;
