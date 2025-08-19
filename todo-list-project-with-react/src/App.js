import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import { todosContext } from "./contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import MySnackBar from "./components/MySnackBar";
import { ToastProvider } from "./contexts/toastContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main: "#5c6bc0",
    },
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "في وقت قصير",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "في وقت قصير",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "في وقت قصير",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#191b1f",
            height: "100vh",
            direction: "rtl",
            padding: "2rem 0",
          }}
        >
          <todosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </todosContext.Provider>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
