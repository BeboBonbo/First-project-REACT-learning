import { useState } from "react";
export default function MyForm() {
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
  });
  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInputs, isStudent: event.target.checked });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />
      <hr />
      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          setFormInput({ ...formInputs, email: event.target.value });
        }}
      />
      <hr />
      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(event) => {
          setFormInput({ ...formInputs, age: event.target.value });
        }}
      />
      <hr />
      <label>Student</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleCheckBoxChanged}
      />
      <hr />
      <select
        value={formInputs.country}
        onChange={(event) => {
          setFormInput({ ...formInputs, country: event.target.value });
        }}
      >
        <option>Egypt</option>
        <option>KSA</option>
        <option>Syria</option>
      </select>
      <hr />
      <div>
        <input
          value="student"
          type="radio"
          name="status"
          checked={formInputs.status == "student"}
          onChange={(event) => {
            setFormInput({ formInputs, status: event.target.value });
          }}
        />
        Student
        <input
          type="radio"
          value="teacher"
          checked={formInputs.status == "teacher"}
          onChange={(event) => {
            setFormInput({ formInputs, status: event.target.value });
          }}
        />
        Teacher
      </div>
      <hr />
      <label>General information</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInput({ ...formInputs, generalInfo: event.target.value });
        }}
      />
      <hr />
      <button>Submit</button>
    </form>
  );
}
