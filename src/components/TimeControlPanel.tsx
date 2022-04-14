import React, { FC } from 'react';

interface TimeControlPanelProps {
  taskId: number;
  onClickPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TimeControlPanel: FC<TimeControlPanelProps> = ({taskId, onClickPlay}) => {
  return (
    <div>
        <button value={taskId} onClick={onClickPlay}>Play</button>
        <button>Pause</button>
        <button>Stop</button>
        <button>+/-</button>
    </div>
  );
};

export default TimeControlPanel;