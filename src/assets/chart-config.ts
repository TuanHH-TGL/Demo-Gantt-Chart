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

const userConfig: Config = {
  licenseKey:
    "====BEGIN LICENSE KEY====\nCP66GpnnYEf9zbRhmffIkCKbk2zuqtAOXmOeVI/iqwReI+U2OB7+I2xbbI1yRWmKjemah7xgecU3sbuwH/+Ow+zZGH5rzQ4nD7dvq/gWeFWL2+nwu/zOKrKVw01qz2iAv2M2u0sX6Z3a1Otty8UODCaH7cWw839Vm/YNioRazIpO9kLDClRBfRN7cWaxkuc24x7cCgSiTWLyrNIgBRjMW8Al5kiSLwoyd3vC1kR/BQY4jAr0jNGmf7oqzYH44mtjCkoDF5YU2kZGG52BIS7hFICH8TRjyr3vW3nGUQ/Na7gLlwozvP/Qm7vKCkChr0z+/npQYJZgRyCpPB6jRtJOiQ==||U2FsdGVkX1+uTdHWqGe7OB+TRdDs0E+rigf70ZGK8PTgUV9nFgNmMraRtfwI1JqVU48BN8ECEXR8ifmPq8xFWzhbrMX/XAN6bxppNV/4kU0=\nV9uvDxwvIo4N2q4VGjU3vVJqFNgfh81NV/q/sdhACJrK9Qrlg9R/aqxsD0MZAEAminJgzMVW26NCKcpnSYx5EW9zTbi5NejvqkJCArs1S3ut6tbZcnjUv6kqV+ut4+8eDyBEzKEhGx2lpFt2OiHTRNa2JblUh+O7SxZXzA8Eb72y4u+TxPzdhUjeZ4z9paarBW0jPN3Rxw2ESt3bVKB4NaLP1elxTdZe7UKzFUby6ninwzFUMYXDRzblnvPRSElVhrBkoECYCLyOM2sAgOev1iiI+fV19kTd4RpcrDclfs58aIoTuCSwJNimwVMIa9CcmcHaSdTgXokNfBu4nEamqA==\n====END LICENSE KEY====",
  plugins: [TimelinePointer(), Selection(), ItemResizing(), ItemMovement()],
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

export default userConfig;
