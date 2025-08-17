import { Link } from "react-router-dom";
import { postsContext } from "./contexts/postsContext";
import { useContext } from "react";
export default function PostsList() {
  const posts = useContext(postsContext);
  let postsList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div
          style={{ background: "orange", padding: "20px", marginTop: "10px" }}
        >
          <h2>{post.title}</h2>
        </div>
      </Link>
    );
  });
  return <>{postsList}</>;
}
