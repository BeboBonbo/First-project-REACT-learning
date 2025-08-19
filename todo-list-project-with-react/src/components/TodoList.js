import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
// ICONS:-
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
// COMPONENTS:-
import Todo from "./Todo";
// OTHERS:-
import { todosContext } from "../contexts/todosContext";
import { useContext, useState, useEffect } from "react";

export default function TodoList() {
  const { todos, setTodos } = useContext(todosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // Filteration Arrays
  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });

  const notCompletedTodos = todos.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRendered = todos 
  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos
  }else if(displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos
  }else{
    todosToBeRendered = todos
  }

  const todoJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });



  useEffect(() => {
    console.log("calling use effect");
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storageTodos || []);
  }, []);

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} style={{
        maxHeight: "88vh",
        overflow: "scroll"
      }}>
        <CardContent>
          <Typography
            variant="h2"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            مهامي
          </Typography>

          <Divider />

          {/* Filter Buttons */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px"}}
            value={displayedTodosType}
            exclusive
            onChange={changeDisplayedType}
            aria-label="text alignment"
            color = "primary"
          >
            <ToggleButton value="no-completed" aria-label="left aligned">
              الغير منجز
            </ToggleButton>
            <ToggleButton value="completed" aria-label="centered">
              المنجز
            </ToggleButton>
            <ToggleButton value="all" aria-label="right aligned">
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {/* ==== Filter Buttons ==== */}

          {/* All Todos */}

          {todoJsx}

          {/* ==== All Todos ==== */}

          {/* INPUT & BUTTON ADD */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              marginTop: "20px",
              height: "56px",
            }}
          >
            <TextField
              style={{ width: "65%", borderColor: "primary"}}
              id="outlined-basic"
              label="عنوان المهمة"
              variant="outlined"
              value={titleInput}
              onChange={(e) => {
                setTitleInput(e.target.value);
                
              }}
            />
            <Button
              style={{ width: "35%", height: "100%" }}
              variant="contained"
              onClick={() => {
                handleAddClick();
              }}
              disabled={titleInput.length <= 0}
            >
              إضافة
            </Button>
          </div>
          {/* ==== INPUT & BUTTON ADD ==== */}
        </CardContent>
      </Card>
    </Container>
  );
}
