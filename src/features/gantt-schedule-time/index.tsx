import { useCallback } from "react";
import { initializeGTST } from "./helper";
import "gantt-schedule-timeline-calendar/dist/style.css";
import { useLocation } from "react-router-dom";

const GanttScheduleTimeline = () => {
  const { search } = useLocation();
  const searchType = new URLSearchParams(search).get("type")!;

  const callback = useCallback(
    (element: HTMLDivElement) => {
      if (element) {
        initializeGTST(element, searchType);
      }
    },
    [searchType]
  );

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
