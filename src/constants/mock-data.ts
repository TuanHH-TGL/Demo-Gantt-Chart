// Tạo dữ liệu mẫu cho Task
const tasks: Task[] = [
  {
    id: "1",
    name: "Task 1",
    start: new Date(2022, 1, 1),
    end: new Date(2022, 1, 5),
    progress: 100,
    dependencies: [],
  },
  {
    id: "2",
    name: "Task 2",
    start: new Date(2022, 1, 6),
    end: new Date(2022, 1, 10),
    progress: 50,
    dependencies: ["1"],
  },
  {
    id: "3",
    name: "Task 3",
    start: new Date(2022, 1, 11),
    end: new Date(2022, 1, 15),
    progress: 0,
    dependencies: ["2"],
  },
  {
    id: "4",
    name: "Task 4",
    start: new Date(2022, 1, 16),
    end: new Date(2022, 1, 20),
    progress: 0,
    dependencies: ["3"],
  },
  {
    id: "5",
    name: "Task 5",
    start: new Date(2022, 1, 21),
    end: new Date(2022, 1, 25),
    progress: 0,
    dependencies: ["4"],
  },
];

const members: Member[] = [
  { id: "1", name: "Member 1", tasks: [tasks[0], tasks[1]] },
  { id: "2", name: "Member 2", tasks: [tasks[2], tasks[3]] },
  { id: "3", name: "Member 3", tasks: [tasks[4]] },
];

// Tạo dữ liệu mẫu cho Project
const projects: Project[] = [
  { id: "1", name: "Project 1", tasks: [tasks[0], tasks[1]] },
  { id: "2", name: "Project 2", tasks: [tasks[2], tasks[3]] },
  { id: "3", name: "Project 3", tasks: [tasks[4]] },
];

// Tạo dữ liệu mẫu cho mỗi loại Gantt Chart
export const projectTaskGantt: ProjectTaskGantt = {
  project: projects[0],
};

export const memberEffortGantt: MemberEffortGantt = {
  project: projects[0],
  members,
};

export const projectsProgressGantt: ProjectsProgressGantt = {
  projects: projects,
};
