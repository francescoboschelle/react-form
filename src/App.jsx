import { useState } from "react";

const initTasks = [
  "Learn PHP",
  "Learn JS",
  "Learn Python",
  "Learn Laravel",
  "Learn Vue",
];

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(initTasks);

  function handleSubmit(e) {
    e.preventDefault();

    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista Task</h1>
        <ul className="list-group">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="list-group-item">
                {task}
              </li>
            );
          })}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Insert new task"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
            <button type="submit" className="btn">
              <i className="bi bi-floppy"></i> Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
