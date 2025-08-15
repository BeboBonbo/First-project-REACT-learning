import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputcontext";

export default function MyInput() {
  const inputContext = useContext(LoanInputContext);

  const labelStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const inpStyle = { width: "100%", border: "none"};

  return (
    <>
      <label style={labelStyle}>
        {inputContext.labelTitle}
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
