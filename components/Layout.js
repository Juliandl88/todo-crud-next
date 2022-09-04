import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/TasksContext";

const Layout = ({ children }) => {

  const router = useRouter()
  const { tasks } = useTasks()

  return (
    <div className="bg-gray-900 text-white">
      <header className="flex bg-gray-800 text-white px-28 py-5 items-center">
        <Link href="/">
        <a>
        <h1 className="font-black text-lg">Task App</h1>
        </a>
          
        </Link>

        <span className="ml-2 text-grey-400 font-bold">
          {tasks.length} Tasks
        </span>

        <div className="flex-grow text-right">
          <button onClick={() => router.push ("/new")}className="bg-green-500 px-2 py-3 hover:bg-green-400 font-bold rounded-sm inline-flex items-center">
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>
      <main className="px-28 py-10 ">{children}</main>
    </div>
  );
};

export default Layout;
