import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/TasksContext";

const Layout = ({ children }) => {

  const router = useRouter()
  const { tasks } = useTasks()

  return (
    <div className="h-screen overflow-auto text-white bg-gray-900">
      <header className="flex items-center py-5 text-white bg-gray-800 px-28">
        <Link href="/">
        <a>
        <h1 className="text-lg font-black">Task App</h1>
        </a>
          
        </Link>

        <span className="ml-2 font-bold text-grey-400">
          {tasks.length} Tasks
        </span>

        <div className="flex-grow text-right">
          <button onClick={() => router.push ("/new")}className="inline-flex items-center px-2 py-3 font-bold bg-green-500 rounded-sm hover:bg-green-400">
            <AiOutlinePlus className="mr-2" />
            Add new Task
          </button>
        </div>
      </header>
      <main className="py-10 px-28 ">{children}</main>
    </div>
  );
};

export default Layout;
