import React, { FC } from 'react';
// import { ITask } from "../interfaces/taskBarInterfaces";

interface TaskHeaderProps {
//   tasks: ITask[];
onClick: () => void;
}

const TaskHeader: FC<TaskHeaderProps> = ({ onClick }) => {
  return (
      <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "10px"}}>
          <label style={{border: "solid gray 1px", fontSize: "x-large"}}>Task</label>
          <label style={{border: "solid gray 1px", fontSize: "x-large"}}>Time</label>
          <label style={{border: "solid gray 1px", fontSize: "x-large"}}>Name</label>
          <button onClick={onClick}>Add task +</button>
      </div>
  );
};

export default TaskHeader;
