import { Task } from "gantt-task-react";

// Create mock tasks
export const tasks: Task[] = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: "Idea",
    id: "Task 0",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  // {
  //   start: new Date(2020, 1, 3),
  //   end: new Date(2020, 1, 4),
  //   name: "Design",
  //   id: "Task 1",
  //   type: "task",
  //   progress: 60,
  //   isDisabled: false,
  //   styles: { progressColor: "#5ac8fa", progressSelectedColor: "#007aff" },
  // },
  // {
  //   start: new Date(2020, 1, 5),
  //   end: new Date(2020, 1, 6),
  //   name: "Development",
  //   id: "Task 2",
  //   type: "task",
  //   progress: 75,
  //   isDisabled: false,
  //   styles: { progressColor: "#34c759", progressSelectedColor: "#30d158" },
  // },
];
