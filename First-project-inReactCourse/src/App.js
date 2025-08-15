import FormRequest from "./FormRequest";
import { UserContext } from "./contexts/UserContext";
function App() {
  return (
    <UserContext.Provider value = {{userName: "Bonbo", name: "Habiba", email: "Bonbo@gmail.com"}} >
      <div className="App" style={{background: "rgb(10, 0, 53)", width: "100%", height: "fitContent", padding: "3rem 0", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <FormRequest />
      </div>
    </UserContext.Provider>
  );
}

export default App;
