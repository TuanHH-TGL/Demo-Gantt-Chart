import { Gantt } from "gantt-task-react";
import { tasks } from "./helper";
import "gantt-task-react/dist/index.css";

const GanttTask = () => {
  return (
    <div className="absolute overflow-x-auto inset-0 w-full h-full p-5">
      <Gantt tasks={tasks} />
    </div>
  );
};

export default GanttTask;
