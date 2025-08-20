import { createContext, useContext, useReducer } from "react";
import Todosreducer from "../reducers/todosReducer";

export const todosContext = createContext([]);
export const dispatchContext = createContext(null);

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(Todosreducer, []);
  return (
    <todosContext.Provider value={todos}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </todosContext.Provider>
  );
};
export const useTodos = () => {
  return useContext(todosContext);
};
export const useTodosDispatch = () => {
  return useContext(dispatchContext);
};

export default TodosProvider;
// export const todosContext = createContext([])
