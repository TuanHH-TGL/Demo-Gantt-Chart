import GSTC, { Config, Items, Rows } from "gantt-schedule-timeline-calendar";
import { Plugin as TimelinePointer } from "gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js";
import { Plugin as Selection } from "gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js";
import { Plugin as ItemResizing } from "gantt-schedule-timeline-calendar/dist/plugins/item-resizing.esm.min.js";
import { Plugin as ItemMovement } from "gantt-schedule-timeline-calendar/dist/plugins/item-movement.esm.min.js";
import {
  memberEffortGantt,
  projectTaskGantt,
  projectsProgressGantt,
} from "@/constants/mock-data";

function generateRows(searchType: string) {
  const rows: Rows = {};
  if (searchType === "1") {
    const mockData = projectTaskGantt;
    for (const task of mockData.project.tasks) {
      const rowId = GSTC.api.GSTCID(task.id);
      rows[rowId] = {
        id: rowId,
        label: task.name,
      };
    }
  } else if (searchType === "2") {
    const mockData = memberEffortGantt;
    for (const member of mockData.members) {
      const rowId = GSTC.api.GSTCID(member.id);
      rows[rowId] = {
        id: rowId,
        label: member.name,
      };
    }
  } else {
    const mockData = projectsProgressGantt;
    for (const project of mockData.projects) {
      const rowId = GSTC.api.GSTCID(project.id);
      rows[rowId] = {
        id: rowId,
        label: project.name,
      };
    }
  }
  return rows;
}

function generateItems(searchType: string) {
  const items: Items = {};
  if (searchType === "1") {
    const mockData = projectTaskGantt;
    for (const task of mockData.project.tasks) {
      const id = GSTC.api.GSTCID(task.id);
      const rowId = GSTC.api.GSTCID(task.id);
      items[id] = {
        id,
        label: task.name,
        rowId,
        time: {
          start: task.start.valueOf(),
          end: task.end.valueOf(),
        },
      };
    }
  } else if (searchType === "2") {
    const mockData = memberEffortGantt;
    for (const member of mockData.members) {
      for (const task of member.tasks) {
        const id = GSTC.api.GSTCID(task.id);
        const rowId = GSTC.api.GSTCID(member.id);
        items[id] = {
          id,
          label: task.name,
          rowId,
          time: {
            start: task.start.valueOf(),
            end: task.end.valueOf(),
          },
        };
      }
    }
  } else {
    const mockData = projectsProgressGantt;
    for (const project of mockData.projects) {
      for (const task of project.tasks) {
        const id = GSTC.api.GSTCID(task.id);
        const rowId = GSTC.api.GSTCID(project.id);
        console.log(rowId);
        items[id] = {
          id,
          label: task.name,
          rowId,
          time: {
            start: task.start.valueOf(),
            end: task.end.valueOf(),
          },
        };
      }
    }
  }
  return items;
}

const getConfig = ({
  headerHeight,
  innerHeight,
  searchType,
}: {
  innerHeight: number;
  headerHeight: number;
  searchType: string;
}) => {
  const config: Config = {
    licenseKey: import.meta.env.VITE_GANTT_SCHEDULE_LICIENS_KEY,
    plugins: [TimelinePointer(), Selection(), ItemResizing(), ItemMovement()],
    headerHeight,
    innerHeight,
    list: {
      columns: {
        data: {
          [GSTC.api.GSTCID("id")]: {
            id: GSTC.api.GSTCID("id"),
            width: 60,
            data: ({ row }) => GSTC.api.sourceID(row.id),
            header: {
              content: "ID",
            },
          },
          [GSTC.api.GSTCID("label")]: {
            id: GSTC.api.GSTCID("label"),
            width: 200,
            data: "label",
            header: {
              content: "Label",
            },
          },
        },
      },
      rows: generateRows(searchType),
      toggle: {
        display: false,
      },
    },
    chart: {
      items: generateItems(searchType),
    },
  };
  return config;
};

export const initializeGTST = (element: HTMLElement, searchType: string) => {
  const containerHeight = element.clientHeight;
  const paddingHeight = 40;
  const headerHeight = 72;
  const innerHeight = containerHeight - paddingHeight - headerHeight;
  const config = getConfig({
    innerHeight,
    headerHeight,
    searchType,
  });
  const state = GSTC.api.stateFromConfig(config);
  GSTC({
    element,
    state,
  });
};
