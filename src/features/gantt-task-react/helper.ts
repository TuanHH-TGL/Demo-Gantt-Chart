import {
  memberEffortGantt,
  projectTaskGantt,
  projectsProgressGantt,
} from "@/constants/mock-data";
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
];

export const getTasks = (searchType: string): Task[] => {
  if (searchType === "1") {
    const mockData = projectTaskGantt;
    const tasks = mockData.project.tasks.map<Task>((task) => {
      return {
        id: task.id,
        name: task.name,
        start: task.start,
        end: task.end,
        progress: task.progress,
        type: "task",
        dependencies: task.dependencies,
      };
    });
    return tasks;
  }
  if (searchType === "2") {
    const mockData = memberEffortGantt;
    const tasks: Task[] = [];
    for (const member of mockData.members) {
      tasks.push({
        id: member.id,
        name: member.name,
        type: "project",
        start: member.tasks[0].start,
        end: member.tasks[member.tasks.length - 1].end,
        progress: 0,
      });
      for (const task of member.tasks) {
        tasks.push({
          id: task.id,
          name: task.name,
          start: task.start,
          end: task.end,
          progress: task.progress,
          type: "task",
          dependencies: task.dependencies,
          project: member.id,
        });
      }
    }
    return tasks;
  }
  const mockData = projectsProgressGantt;
  const tasks: Task[] = [];
  for (const project of mockData.projects) {
    tasks.push({
      id: project.id,
      name: project.name,
      type: "project",
      start: project.tasks[0].start,
      end: project.tasks[project.tasks.length - 1].end,
      progress: 0,
    });
    for (const task of project.tasks) {
      tasks.push({
        id: task.id,
        name: task.name,
        start: task.start,
        end: task.end,
        progress: task.progress,
        type: "task",
        dependencies: task.dependencies,
        project: project.id,
      });
    }
  }
  return tasks;
};
