import { useCallback } from "react";
import { initializeGTST } from "./helper";
import "gantt-schedule-timeline-calendar/dist/style.css";

const GanttScheduleTimeline = () => {
  const callback = useCallback((element: HTMLDivElement) => {
    if (element) {
      initializeGTST(element);
    }
  }, []);
  return (
    <div
      className="w-full h-full p-5"
      onScroll={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      ref={callback}
    />
  );
};

export default GanttScheduleTimeline;
