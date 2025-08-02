export default function MyFirstComponent() {
  const x = 10;
  const person = {
    name: "M&H",
    email: "M&H@gmail.com",
  };
  const elmStyle = {
    backgroundColor: "blue",
    fontSize: "20px",
    boxShadow: "0px 20px 10px black",
  };
  return (
    <div>
      <div>
        <h1 style={elmStyle} >{person.name} Hello World</h1>
        <h2 style={{backgroundColor: "green", fontSize: "18px"}}>Hi {x+10}</h2>
        <button onClick ={sayHello}>Click Me</button>
      </div>
    </div>
  );
};
function sayHello () {
    alert("hello");
};
