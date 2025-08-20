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
import { useTodosDispatch } from "../contexts/todosContext";
import { useTodos } from "../contexts/todosContext";
import { useState, useEffect, useMemo, useReducer } from "react";
import { useToast } from "../contexts/toastContext";
import Todosreducer from "../reducers/todosReducer";

// DIALOG impots
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";


export default function TodoList() {

  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const { showHideToast } = useToast();

  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [dialogTodo, setDialogTodo] = useState("null");

  // Filteration Arrays
  const completedTodos = useMemo(() => {
    return todos.filter((t) => {
      console.log("calling completed todos");
      return t.isCompleted;
    });
  }, [todos]);

  const notCompletedTodos = useMemo(() => {
    return todos.filter((t) => {
      console.log("calling not completed todos");
      return !t.isCompleted;
    });
  }, [todos]);

  let todosToBeRendered = todos;
  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  } else {
    todosToBeRendered = todos;
  }

  useEffect(() => {
    dispatch({type: "get"})
  }, []);

  // EVENT HANDLERS
  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }

  function handleAddClick() {
    dispatch({type: "added", payload: {newTitle: titleInput} })
    setTitleInput("");
    showHideToast("تمت الإضافة بنجاح");
  }

  function openDeleteDialog(todo) {
    setDialogTodo(todo);
    setShowDeleteDialog(true);
  }

  function openUpdateDialog(todo) {
    setDialogTodo(todo);
    setShowUpdateDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleDeleteConfirm() {
    dispatch({type: "deleted", payload: dialogTodo});    
    setShowDeleteDialog(false);
    showHideToast("تم الحذف بنجاح");
  }

  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }

  function handleUpdateConfirm() {
    dispatch({type: "updated", payload: dialogTodo})
    setShowUpdateDialog(false);
    showHideToast("تم التحديث بنجاح");
  }

  const todoJsx = todosToBeRendered.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        showDelete={openDeleteDialog}
        showUpdate={openUpdateDialog}
      />
    );
  });

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
            value={dialogTodo.title}
            onChange={(e) => {
              setDialogTodo({ ...dialogTodo, title: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="التفاصيل"
            fullWidth
            variant="standard"
            value={dialogTodo.details}
            onChange={(e) => {
              setDialogTodo({ ...dialogTodo, details: e.target.value });
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

      <Container maxWidth="sm">
        <Card
          sx={{ minWidth: 275 }}
          style={{
            maxHeight: "88vh",
            overflow: "scroll",
          }}
        >
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
              style={{ direction: "ltr", marginTop: "30px" }}
              value={displayedTodosType}
              exclusive
              onChange={changeDisplayedType}
              aria-label="text alignment"
              color="primary"
            >
              <ToggleButton value="non-completed" aria-label="left aligned">
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
                style={{ width: "65%", borderColor: "primary" }}
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
    </>
  );
}
