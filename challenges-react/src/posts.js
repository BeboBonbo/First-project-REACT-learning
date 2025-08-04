export default function Post() {
  const postStyle = {
    border: "4px solid #0b7372",
    padding: "0 7px",
  };
    return (
    <div style = {postStyle}>
      <h3>This is the post title</h3>
      <hr />
      <p>This is the post body</p>
    </div>
  );
}
