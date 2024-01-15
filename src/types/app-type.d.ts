type Task = {
  id: string;
  name: string;
  start: Date;
  end: Date;
  progress: number;
  dependencies: string[];
};

type Project = {
  id: string;
  name: string;
  tasks: Task[];
};

type Member = {
  id: string;
  name: string;
  tasks: Task[];
};

// Kiểu 1: Gantt Chart cho quản lý task trong một project
type ProjectTaskGantt = {
  project: Project;
};

// Kiểu 2: Gantt Chart cho quản lý effort của members trong một project
type MemberEffortGantt = {
  project: Project;
  members: Member[];
};

// Kiểu 3: Gantt Chart cho quản lý tiến độ của các projects
type ProjectsProgressGantt = {
  projects: Project[];
};
