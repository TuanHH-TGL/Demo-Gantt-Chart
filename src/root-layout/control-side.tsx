import { twMerge } from "tailwind-merge";
import LinkButton from "./link-button";
import TypeButton from "./type-button";

const ControlSide = () => {
  return (
    <div
      className={twMerge(
        "flex-[3] flex flex-col h-full items-start justify-center",
        "border-[1px] border-[gray] p-5"
      )}
    >
      <div
        className={twMerge(
          "flex-1 w-full",
          "border-b-[1px] border-b-[black]",
          "flex flex-col gap-5 justify-center items-center"
        )}
      >
        <LinkButton
          activePath="/gantt-schedule-timeline-calendar"
          label="Gantt Schedule Timeline Calendar"
        />
        <LinkButton activePath="/gantt-task" label="Gantt Task" />
      </div>
      <div className="flex-1 w-full flex justify-center items-center gap-5 flex-col">
        <TypeButton activeType="1" label="Type 1: Tasks in project" />
        <TypeButton activeType="2" label="Type 2: Effort members" />
        <TypeButton activeType="3" label="Type 3: progress of projects" />
      </div>
    </div>
  );
};

export default ControlSide;
