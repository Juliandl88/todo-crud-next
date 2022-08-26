const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Task App</h1>
        <div>
          <botton>Add Task</botton>
        </div>
      </header>
      { children }
    </div>
  );
};

export default Layout;
