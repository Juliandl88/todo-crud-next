import { useTasks } from '../context/TasksContext';
import Layout from "../components/Layout"



const Home = () => {

  const { tasks } = useTasks();

  console.log(tasks);

  return (
       
    <Layout>
      <div>Home </div>
    </Layout>
    
  )
}

export default Home