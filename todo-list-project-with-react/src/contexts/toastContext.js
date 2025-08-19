import { createContext } from "react";
import TodoList from "../components/TodoList";
import { useState, useContext } from "react";
import MySnackBar from "../components/MySnackBar";

const toastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <toastContext.Provider value={{ showHideToast }}>
      <MySnackBar open={open} message={message} />

      {children}
    </toastContext.Provider>
  );
};

export const useToast =() =>{
   return useContext(toastContext); 
} 