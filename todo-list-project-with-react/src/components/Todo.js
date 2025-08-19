import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// ICONS
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { useContext } from "react";
import { todosContext } from "../contexts/todosContext";
import { toastContext, useToast } from "../contexts/toastContext";
// DIALOG impots
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Todo({ todo, showDelete, showUpdate }) {
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });
  const { todos, setTodos } = useContext(todosContext);
  const { showHideToast } = useToast();
  // const { showHideToast } = useContext(toastContext);

  // EVENT HANDLERS
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    showHideToast("تم التعديل بنجاح")
  }

  function handleDeleteClick() {
    showDelete(todo);
  }

  function handleUpdateClick() {
    showUpdate(todo);
  }

  const [btnHovered, setBtnHovered] = useState(null);
  const [todoCardHovered, setTodoCardHovered] = useState(false);
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
          transition: "0.3s",
          padding: todoCardHovered ? "20px 0" : "0",
          boxShadow: todoCardHovered ? "0 7px 7px rgba(0, 0, 0, 0.4)" : "none",
        }}
        onMouseEnter={() => setTodoCardHovered(true)}
        onMouseLeave={() => setTodoCardHovered(false)}
      >
        <CardContent
          style={{
            display: "flex",
            aignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <div>
            <Typography
              variant="h5"
              sx={{
                textAlign: "right",
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "right",
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.details}
            </Typography>
          </div>
          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "5px",
            }}
          >
            <IconButton
              onClick={() => {
                handleCheckClick();
              }}
              aria-label="check"
              style={{
                color: todo.isCompleted ? "white" : "#8bc34a",
                background:
                  btnHovered === "check"
                    ? "#c5c5c5"
                    : todo.isCompleted
                    ? "#8bc34a"
                    : "white",
                border: "solid #8bc34a 3px",
                transition: "all .3s",
                boxShadow:
                  btnHovered === "check"
                    ? "0 7px 7px rgba(0, 0, 0, 0.4)"
                    : "none",
              }}
              onMouseEnter={() => setBtnHovered("check")}
              onMouseLeave={() => setBtnHovered(null)}
            >
              <CheckIcon />
            </IconButton>

            <IconButton
              onClick={handleUpdateClick}
              aria-label="edit"
              style={{
                color: "#1769aa",
                background: btnHovered === "edit" ? "#c5c5c5" : "white",
                border: "solid #1769aa 3px",
                transition: "all .3s",
                boxShadow:
                  btnHovered === "edit"
                    ? "0 7px 7px rgba(0, 0, 0, 0.4)"
                    : "none",
              }}
              onMouseEnter={() => setBtnHovered("edit")}
              onMouseLeave={() => setBtnHovered(null)}
            >
              <ModeEditOutlineOutlinedIcon />
            </IconButton>

            <IconButton
              onClick={handleDeleteClick}
              aria-label="delete"
              style={{
                color: "#b23c17",
                background: btnHovered === "delete" ? "#c5c5c5" : "white",
                border: "solid #b23c17 3px",
                transition: "all .3s",
                boxShadow:
                  btnHovered === "delete"
                    ? "0 7px 7px rgba(0, 0, 0, 0.4)"
                    : "none",
              }}
              onMouseEnter={() => setBtnHovered("delete")}
              onMouseLeave={() => setBtnHovered(null)}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
          {/* ==== Action Buttons ==== */}
        </CardContent>
      </Card>
    </>
  );
}
