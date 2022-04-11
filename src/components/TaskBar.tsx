import React, { FC } from 'react';
import TaskLine from "./TaskLine";
import { ITask } from "../interfaces/taskBarInterfaces";

interface TaskBarProps {
  tasks: ITask[];
}

const TaskBar: FC<TaskBarProps> = ({tasks}) => {
  return (
    <div>
      {tasks.map(task => <TaskLine key={task.id} task={task}></TaskLine>)}
    </div>
  );
};

export default TaskBar;