import React, { FC } from 'react';
import TimeControlPanel from "./TimeControlPanel";
import { ITask } from "../interfaces/taskBarInterfaces";

interface TaskLineProps {
    task: ITask;
}

const TaskLine: FC<TaskLineProps> = ({task}) => {
  return (
    <div>
        <label>{task.number}</label>
        <label>{task.time}</label>
        <label>{task.name}</label>
        <TimeControlPanel></TimeControlPanel>
    </div>
  );
};

export default TaskLine;