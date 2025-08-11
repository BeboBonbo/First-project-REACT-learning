import btnFlower from "./img/btnFlower.jpg";
import flowerBtn from "./img/flowerBtn.jpg";
import React, { useState } from "react";
function Btn({ btnTitle, children }) {
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
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div>
      {btnTitle == null || btnTitle == "" ? (
        <div></div>
      ) : (
        <button
          style={btnStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {btnTitle}
          {children}
        </button>
      )}
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

  const categories = [
    {
      id: 1,
      btnTitle: "جديدة",
      child: (
        <img
          src={btnFlower}
          style={{ height: "75px", width: "125px", borderRadius: "5px" }}
        />
      ),
    },
    {
      id: 2,
      btnTitle: "الأكثر قراءة",
    },
    {
      id: 3,
      btnTitle: "مقلات مميزة",
      child: (
        <>
          <div
            style={{
              display: "flex",
              margin: "1rem 5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          </div>

          <img
            src={flowerBtn}
            style={{ width: "100px", borderRadius: "5px" }}
          />
        </>
      ),
    },
  ];
  const categoriesList = categories.map((category) => {
    return <Btn key={category.id} btnTitle={category.btnTitle} >
      {category.child}
    </Btn>;
  });
  return (
    <div style={sideSecStyle}>
      {categoriesList}
      {/* <Btn btnTitle={"جديدة"} />
      <Btn btnTitle={"الأكثر قراءة"}>
        <img
          src={btnFlower}
          style={{ height: "75px", width: "125px", borderRadius: "5px" }}
        />
      </Btn>
      <Btn btnTitle={"مقلات مميزة"}>
        
      </Btn>
      <Btn btnTitle={""} /> */}
    </div>
  );
}
