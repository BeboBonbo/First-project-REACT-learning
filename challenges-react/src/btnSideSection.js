import React, { useState } from "react";
function Btn() {
  const [isHovered, setIsHovered] = useState(false);
  const btnStyle = {
    color: "white",
    borderRadius: "7px",
    padding: "7px",
    margin: "7px",
    border: "none",
    boxShadow: "0px 5px 7px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
    transition: "0.3s",
    backgroundColor: isHovered ? "#5d095d" : "purple",
  };
  return (
    <div>
      <button
        style={btnStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Tag Button
      </button>
    </div>
  );
}
export default function BtnSideSec() {
  const sideSecStyle = {
    border: "4px solid #0b7372",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    padding: "0 2rem",
  };
  return (
    <div style={sideSecStyle}>
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
    </div>
  );
}
