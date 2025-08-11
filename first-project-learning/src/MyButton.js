import { useState } from "react";
export default function MyButton() {
  const [name, setName] = useState("Habiba");
  function buttonClicked() {
    if (name == "Bebo") {
      setName("Habiba");
    } else {
      setName("Bebo");
    }
  }
  return (
    <div>
      <button onClick={buttonClicked}>Change this name</button>
      <h1>{name}</h1>
    </div>
  );
}
