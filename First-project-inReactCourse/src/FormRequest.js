// import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { LoanInputContext } from "./contexts/LoanFormInputcontext";
import { useState } from "react";
import Modal from "./Modal";
import MyComponent from "./MyComponenty";

export default function FormRequest() {
  const [showModal, setShowModal] = useState(false);
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 200) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is incorrect");
    }
    setShowModal(true);
  }
  const userData = useContext(UserContext);
  const initialName = userData.name;
  const [loanInputs, setLoanInputs] = useState({
    name: initialName,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "less than 500$",
  });
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
  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }
  function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }
  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }
  return (
    <div
      onClick={() => {
        if (showModal) {
          setShowModal(false);
        }
      }}
      style={{ width: "45%" }}
    >
      <h1 style={{ color: "white" }}>Hello {userData.name}</h1>
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
          boxSizing: "border-box",
        }}
      >
        {/* <Container>This is Conatienr</Container>- */}
        <h1 style={{ margin: "0px", padding: "0px" }}>Request a Loan</h1>
        <hr style={inpStyle} />

        <LoanInputContext.Provider
          value={{
            value: loanInputs.name,
            handleChange: handleNameInputChange,
            labelTitle: "Name:",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            value: loanInputs.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "Phone Number:",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            value: loanInputs.age,
            handleChange: handleAgeInputChange,
            labelTitle: "Age:",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>
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
        <Modal errorMessage={errorMessage} isVisible={showModal} />
      </form>
    </div>
  );
}

// const Container = styled.div({
//     background: "bink",
// })
