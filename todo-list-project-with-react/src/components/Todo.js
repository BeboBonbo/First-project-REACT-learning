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
// DIALOG impots
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Todo({ todo, handleChick }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ title: todo.title, details: todo.details });
  const { todos, setTodos } = useContext(todosContext);

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
  }

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }

  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }

  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleUpdateConfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return { ...t, title: updatedTodo.title, details: updatedTodo.details };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    setShowUpdateDialog(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const [btnHovered, setBtnHovered] = useState(null);
  const [todoCardHovered, setTodoCardHovered] = useState(false);
  return (
    <>
      {/* DELETE DIALOG */}
      <Dialog
        style={{ direction: "rtl" }}
        onClose={handleDeleteDialogClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل أنت متأكد من حذف هذه المهمة؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد اختيار زر حذف
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>إغلاق</Button>
          <Button
            autoFocus
            style={{ color: "#b23c17" }}
            onClick={handleDeleteConfirm}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
      {/* ==== DELETE DIALOG ==== */}

      {/* UPDATE DIALOG */}
      <Dialog
        style={{ direction: "rtl" }}
        onClose={handleUpdateDialogClose}
        open={showUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"تعديل المهمة"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="العنوان"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, title: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="التفاصيل"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, details: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>إلغاء</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
      {/*=== UPDATE DIALOG ===*/}

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
            <Typography variant="h5" sx={{ textAlign: "right", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
              {todo.title}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "right", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
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
