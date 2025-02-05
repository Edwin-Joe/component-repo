import { findNextTrains, vTimeToMinutes } from "../../utils/utils";
import ScheduleRow from "./ScheduleRow";

const Schedule = ({ schedule, time }) => {
  const vTime = vTimeToMinutes(time.hours, time.minutes);
  const trains = findNextTrains(schedule, vTime);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "8px",
      }}
    >
      {trains.map((train, index) => (
        <ScheduleRow key={index} train={train} />
      ))}
    </div>
  );
};

export default Schedule;
