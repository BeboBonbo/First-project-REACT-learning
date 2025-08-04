export default function Post({title, content, children}) {
  const postStyle = {
    border: "4px solid #0b7372",
    padding: "0 7px",
  };
    return (
    <div style = {postStyle}>
      <h3>{title}</h3>
      <h2>{children}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}
