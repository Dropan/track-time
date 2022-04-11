import React from 'react';
import TaskBar from "./components/TaskBar";

const App = () => {
  const tasks = [
    {
      id: 1, number: "GM-1252", time: "1h 30m", name: "Add props"
    },{
      id: 2, number: "GM-1543", time: "2d 1h 30m", name: "Remove component"
    },{
      id: 3, number: "GM-1121", time: "30m", name: "New tab"
    }
  ]

  return (
    <div>
      <div>
        <label>Task</label>
        <label>Time</label>
        <label>Name</label>
        <button>Add task +</button>
      </div>
      <TaskBar tasks={tasks}></TaskBar>
    </div>
  );
};

export default App;
