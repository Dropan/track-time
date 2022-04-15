import React, { FC, useState } from 'react';
import TaskLine from "./TaskLine";
// import { ITask } from "../interfaces/taskBarInterfaces";
import TaskHeader from "./TaskHeader";

// interface TaskBarProps {
//   tasks: ITask[];
//   onClickAddTask: () => void;
//   onClickPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }

// const TaskBar: FC<TaskBarProps> = ({tasks, onClickAddTask, onClickPlay }) => {
const TaskBar = () => {
  const mockTasks = [
    {
      id: 1, number: "GM-1252", time: "1h 30m", name: "Add props"
    },{
      id: 2, number: "GM-1543", time: "2d 1h 30m", name: "Remove component"
    },{
      id: 3, number: "GM-1121", time: "30m", name: "New tab"
    }
  ];
  const [tasks, setTasks] = useState(mockTasks);

  const onClickAddTaskHandler = () => 
    setTasks([...tasks, {id: tasks[tasks.length - 1].id + 1, name: "", number: "", time: ""}]);

  const onClickPlayHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id: number = parseInt(e.currentTarget.value);
    let count: number = 0;

    let timerId = setInterval(() => {
      count += 1;

      tasks[id - 1].time = count.toString();

      setTasks([...tasks]);
    }, 6 * 1000);
  }

  console.log("tasks", tasks);

  return (
    <>
      <TaskHeader onClick={onClickAddTaskHandler}></TaskHeader>
      <div>
        {tasks.map(task => (
          <TaskLine
            key={task.id}
            task={task}
            onClickPlay={onClickPlayHandler}
          />
        ))}
      </div>
    </>
  );
};

export default TaskBar;