import GSTC, { Config, Items, Rows } from "gantt-schedule-timeline-calendar";
import { Plugin as TimelinePointer } from "gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js";
import { Plugin as Selection } from "gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js";
import { Plugin as ItemResizing } from "gantt-schedule-timeline-calendar/dist/plugins/item-resizing.esm.min.js";
import { Plugin as ItemMovement } from "gantt-schedule-timeline-calendar/dist/plugins/item-movement.esm.min.js";

function generateRows() {
  const rows: Rows = {};
  for (let i = 0; i < 100; i++) {
    const id = GSTC.api.GSTCID(i.toString());
    rows[id] = {
      id,
      label: `Row ${i}`,
    };
  }
  return rows;
}

function generateItems() {
  const items: Items = {};
  let start = GSTC.api.date().startOf("day").subtract(6, "day");
  for (let i = 0; i < 100; i++) {
    const id = GSTC.api.GSTCID(i.toString());
    const rowId = GSTC.api.GSTCID(Math.floor(Math.random() * 100).toString());
    start = start.add(1, "day");
    items[id] = {
      id,
      label: `Item ${i}`,
      rowId,
      time: {
        start: start.valueOf(),
        end: start.add(1, "day").endOf("day").valueOf(),
      },
    };
  }
  return items;
}

const getConfig = ({
  headerHeight,
  innerHeight,
}: {
  innerHeight: number;
  headerHeight: number;
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
      rows: generateRows(),
    },
    chart: {
      items: generateItems(),
    },
  };
  return config;
};

export const initializeGTST = (element: HTMLElement) => {
  const containerHeight = element.clientHeight;
  const paddingHeight = 40;
  const headerHeight = 72;
  const innerHeight = containerHeight - paddingHeight - headerHeight;
  const config = getConfig({
    innerHeight,
    headerHeight,
  });
  const state = GSTC.api.stateFromConfig(config);
  GSTC({
    element,
    state,
  });
};
