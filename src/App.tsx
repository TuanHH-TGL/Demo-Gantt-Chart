import "@radix-ui/themes/styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./root-layout";
import GanttScheduleTimeline from "./features/gantt-schedule-time";
import GanttTask from "./features/gantt-task-react";
// const state = GSTC.api.stateFromConfig(userConfig);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "gantt-schedule-timeline-calendar",
        element: <GanttScheduleTimeline />,
      },
      {
        path: "gantt-task",
        element: <GanttTask />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
