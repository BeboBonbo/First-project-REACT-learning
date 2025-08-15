// import { styled } from "@mui/material/styles";
import { useState } from "react";
import Modal from "./Modal";
import MyComponent from "./MyComponenty";

export default function FormRequest() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "less than 500$",
  });
  const [showModal, setShowModal] = useState(false);
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const  {age, phoneNumber}= loanInputs;
    if(age < 18 || age > 200) {
      setErrorMessage("The age is not allowed");
    }else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is incorrect")
    }
    setShowModal(true);
  };
    const [errorMessage, setErrorMessage] = useState(null);
  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.phoneNumber == "" ||
    loanInputs.age == "";
  const labelStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const inpStyle = { width: "100%", border: "none", height: "30px" };
  return (
    <div onClick={() => {if(showModal){setShowModal(false)}}} style={{width: "45%"}}>
      <form
        style={{
          color: "white",
          background: "#0f0f8f",
          width: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          borderRadius: "1rem",
          boxShadow: "0 10px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* <Container>This is Conatienr</Container>- */}
        <h1 style={{ margin: "0px", padding: "0px" }}>Request a Loan</h1>
        <hr style={inpStyle} />
        <MyComponent currentInputs={loanInputs} handleChange={setLoanInputs} value={loanInputs.name}/>
        <label style={labelStyle}>
          Phone number:{" "}
          <input
            value={loanInputs.phoneNumber}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
            }}
            style={inpStyle}
          />
        </label>
        <label style={labelStyle}>
          Age:{" "}
          <input
            value={loanInputs.age}
            onChange={(e) => {
              setLoanInputs({ ...loanInputs, age: e.target.value });
            }}
            style={inpStyle}
            type="number"
          />
        </label>
        <label style={labelStyle}>
          Are you an employee?
          <input
            checked={loanInputs.isEmployee}
            onChange={(e) => {
              setLoanInputs({ ...loanInputs, isEmployee: e.target.checked });
            }}
            style={{ ...inpStyle, cursor: "pointer" }}
            type="checkbox"
          />
        </label>
        <label style={labelStyle}>
          Salary
          <select
            value={loanInputs.salaryRange}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
            }}
            style={inpStyle}
          >
            <option>less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>above 2000$</option>
          </select>
        </label>
        <button
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          style={{
            backgroundColor: btnIsDisabled ? "gray" : "rgb(211, 0, 127)",
            padding: "7px 10px",
            borderRadius: "5px",
            borderColor: "transparent",
            color: "white",
            boxShadow: "1px 2px 5px #302d2d8f",
            cursor: btnIsDisabled ? "" : "pointer",
          }}
        >
          Submit
        </button>
      < Modal errorMessage={errorMessage} isVisible={showModal}/>
      </form>
    </div>
  );
}

// const Container = styled.div({
//     background: "bink",
// })
