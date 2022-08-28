import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "first task", description: "some task" },
  ]);

  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};
