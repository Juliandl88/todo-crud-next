const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Task App</h1>
        <div>
          <button  className="bg-green-300 px-2 py-3">Add Task</button>
        </div>
      </header>
      <hr/>
      { children }
    </div>
  );
};

export default Layout;
