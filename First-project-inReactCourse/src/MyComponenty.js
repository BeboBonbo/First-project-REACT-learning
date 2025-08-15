export default function MyComponent({ value, handleChange,  inputName}) { 
  
    const labelStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const inpStyle = { width: "100%", border: "none", height: "30px" };


  return (
    <label style={labelStyle}>
      {inputName}
      <input
        value={value}
        onChange={(event) => {
          handleChange(event.target.value );
        }}
        style={inpStyle}
        type="text"
      />
    </label>
  );

}
