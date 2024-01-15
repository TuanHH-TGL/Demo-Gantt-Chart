import { Gantt, Task } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import useSearchType from "@/utils/use-search-type";
import { useEffect, useState } from "react";
import { getTasks } from "./helper";

const GanttTask = () => {
  const { searchType } = useSearchType();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "Task 1",
      name: "Redesign website",
      start: new Date("2021-01-01"),
      end: new Date("2021-01-02"),
      progress: 20,
      type: "task",
    },
  ]);

  useEffect(() => {
    const calculatedTasks = getTasks(searchType);
    console.log(calculatedTasks);
    setTasks(calculatedTasks);
  }, [searchType]);

  return (
    <div className="absolute overflow-x-auto inset-0 w-full h-full p-5">
      <Gantt tasks={tasks} />
    </div>
  );
};

export default GanttTask;
