import React, { FC } from 'react';
import TaskLine from "./TaskLine";
import { ITask } from "../interfaces/taskBarInterfaces";
import TaskHeader from "./TaskHeader";

interface TaskBarProps {
  tasks: ITask[];
  onClickAddTask: () => void;
  onClickPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TaskBar: FC<TaskBarProps> = ({tasks, onClickAddTask, onClickPlay }) => {
  return (
    <>
      <TaskHeader onClick={onClickAddTask}></TaskHeader>
      <div>
        {tasks.map(task => (
          <TaskLine
            key={task.id}
            task={task}
            onClickPlay={onClickPlay}
          />
        ))}
      </div>
    </>
  );
};

export default TaskBar;