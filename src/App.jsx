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

    if (newTask === "") return;

    setTasks([...tasks, newTask]);
  }

  function handleChange(value, index) {
    const newArr = [...tasks];
    newArr[index] = value;

    setTasks(newArr);
  }

  function handleRemove(i) {
    const newArr = [...tasks];
    newArr.splice(i, 1);

    setTasks(newArr);
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista Task</h1>
        <ul className="list-group bg-rainbow">
          {tasks.map((task, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between bg-transparent"
              >
                <input
                  type="text"
                  className="form-control border-0 bg-opacity-50 bg-white"
                  style={{ maxWidth: "fit-content" }}
                  value={task}
                  onChange={(e) => handleChange(e.target.value, index)}
                />

                <button
                  type="button"
                  className="btn"
                  onClick={() => handleRemove(index)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
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
