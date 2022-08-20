import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTask = () => context = useContext(TaskContext);

export const TasksProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);

  return <TaskContext.Provider value={{ }}>{children}</TaskContext.Provider>;
};
