import React, { FC } from 'react';
import TimeControlPanel from "./TimeControlPanel";
import { ITask } from "../interfaces/taskBarInterfaces";

interface TaskLineProps {
    task: ITask;
    onClickPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TaskLine: FC<TaskLineProps> = ({task, onClickPlay}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly", border: "solid lightgray 1px"}}>
        <input value={task.number} style={{border: "solid gray 1px"}} />
        <label style={{border: "solid gray 1px"}}>{task.time}</label>
        <textarea value={task.name} style={{border: "solid gray 1px"}} />
        <TimeControlPanel
          taskId={task.id}
          onClickPlay={onClickPlay}
        />
    </div>
  );
};

export default TaskLine;