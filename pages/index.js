import { useTask } from '../context/TaskContext';
import Layout from "../components/Layout"

const Home = () => {

  const { tasks } = useTask();

  console.log(tasks);

  return (
       
    <Layout>
      <div>Home </div>
    </Layout>
    
  )
}

export default Home