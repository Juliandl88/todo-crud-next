import Layout from "../components/Layout";
import { useTasks } from "../context/TasksContext";
import { useState } from "react";

const TaskFormPage = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const {createTask} = useTasks()

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
    console.log(e.target.value)
    console.log(e.target.name)
  }

  const handleSubmit = e => {
    
  }

  return (
    <Layout>
      <form>
        <h1>Add a new Task</h1>

        <input
          type="text"
          name="title"
          placeholder="Write a title"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          onChange={handleChange}
        />
        <textarea
          rows="2"
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          name="desciption"
          onChange={handleChange}
        />
        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" 
        disabled >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
