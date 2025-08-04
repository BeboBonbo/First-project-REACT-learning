export default function ({personName, email, content="No article yet", children}) {
  return (
    <>
      <div style={{backgroundColor: "white", boxShadow: "0 10 10 gray", color: "black", margin: "10px"}}>
        <h1>{personName}</h1>
        <h3>{email}</h3>
        <h3>2025</h3>
        <hr />
        <p>{children}</p>
        <p>{content}</p>
      </div>
    </>
  );
}
