import React, { ButtonHTMLAttributes, useState } from 'react';
import TaskBar from "./components/TaskBar";

const App = () => {
  const mockTasks = [
    {
      id: 1, number: "GM-1252", time: "1h 30m", name: "Add props"
    },{
      id: 2, number: "GM-1543", time: "2d 1h 30m", name: "Remove component"
    },{
      id: 3, number: "GM-1121", time: "30m", name: "New tab"
    }
  ]
  const [tasks, setTasks] = useState(mockTasks);

  const onClickAddTaskHandler = () => 
    setTasks([...tasks, {id: tasks[tasks.length - 1].id + 1, name: "", number: "", time: ""}]);

  const onClickPlayHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const t = e.target;
    console.log("t", t);
    setTasks([...tasks]);
  }

  console.log("tasks", tasks);

  return (
    <div style={{display: "block" /*, justifyContent: "center"*/}}>
      <TaskBar 
        onClickPlay={onClickPlayHandler}
        onClickAddTask={onClickAddTaskHandler}
        tasks={tasks}
      />
    </div>
  );
};

export default App;
