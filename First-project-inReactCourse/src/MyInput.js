import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputcontext";
import { UserContext } from "./contexts/UserContext";

export default function MyInput() {
  const inputContext = useContext(LoanInputContext);

  const labelStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const inpStyle = { width: "100%", border: "none" };
  const userData = useContext(UserContext);
  return (
    <>
      <label style={labelStyle}>
        {userData.name}'s {inputContext.labelTitle}
        <input
          value={inputContext.value}
          onChange={(event) => {
            inputContext.handleChange(event.target.value);
          }}
          style={inpStyle}
          type="text"
        />
      </label>
    </>
  );
}
