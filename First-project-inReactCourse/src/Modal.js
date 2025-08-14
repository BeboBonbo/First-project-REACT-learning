export default function Modal({ isVisible, errorMessage=null }) {
  if (isVisible) {
    return (
      <div
        style={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.55)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            width: "46%",
            color: "green",
            boxShadow: errorMessage != null ? "0px 0px 20px  red": "0px 0px 20px rgba(76, 181, 66, 1)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <h1></h1> */}
          <h1 style={{color: errorMessage ? "red" : "green"}}>{errorMessage != null ? errorMessage: "The form has been submitted successfully"}</h1>

        </div>
      </div>
    );
  }else {
    return(<></>);
  }
}
