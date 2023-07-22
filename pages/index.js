import React from "react";
import { useTasks } from "../context/TasksContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

function Home() {
  const { tasks, deleteTask } = useTasks();
  const router = useRouter();

  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <div className="block">
            <h2 className="text-2xl">There aren´t tasks</h2>
            <VscTasklist size="8rem" />
          </div>
        ) : (
          <div className="w-7/10">
            {tasks.map((task, i) => (
              <div
                key={task.id}
                className="flex justify-between px-20 py-5 m-2 bg-gray-700 cursor-pointer hover:bg-gray-600"
                onClick={() => router.push("/edit/" + task.id)}
              >
                <span className="mr-5 text-5xl">{i}</span>
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title}</h1>
                    <button
                      className="inline-flex items-center px-3 py-1 bg-red-700 hover:bg-red-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id);
                      }}
                    >
                      <VscTrash className="mr-2" /> Delete
                    </button>
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Home;
