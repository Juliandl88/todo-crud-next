import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "first task", description: "some task" },
  ]);

  const createTask = (title, description) => {
     setTasks([...tasks, {title, description, id:"2"}])
  }

  return <TaskContext.Provider value={{tasks, createTask}}>{children}</TaskContext.Provider>;
};
