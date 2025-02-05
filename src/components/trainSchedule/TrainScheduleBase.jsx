import { useState, useRef, useEffect } from "react";
import {
  COLORS_DARK as darkTheme,
  COLORS as lightTheme,
  isDarkMode,
  generateTrainSchedule,
  isMobile,
} from "../../utils/utils";
import Schedule from "./Schedule";
import Timer from "./Timer";
import { useMemo } from "react";
import "./styles/TrainScheduleBase.css";

const TrainScheduleBase = ({ schedule }) => {
  const darkMode = isDarkMode();
  const COLORS = darkMode ? darkTheme : lightTheme;
  const [time, setTime] = useState({ hours: 5, minutes: 0 });
  const timeoutRef = useRef(null);
  const trainSchedule = useMemo(
    () => generateTrainSchedule(schedule),
    [schedule]
  );

  const startTimer = () => {
    timeoutRef.current = setTimeout(() => {
      time.minutes === 59
        ? setTime({ hours: time.hours + 1, minutes: 0 })
        : setTime({ hours: time.hours, minutes: time.minutes + 1 });

      time.hours === 23 &&
        time.minutes === 59 &&
        setTime({ hours: 0, minutes: 0 });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const startSchedule = () => {
    clearTimeout(timeoutRef.current);
    setTime({ hours: 7, minutes: 0 });
    startTimer();
  };

  const isMobileDevice = isMobile();

  return (
    <div
      className="train-schedule-container"
      style={{
        backgroundColor: COLORS.primary,
        minWidth: !isMobileDevice ? "30vw" : "70vw",
        minHeight: !isMobileDevice ? "150px" : "auto",
      }}
    >
      <p className="train-schedule-title" style={{ color: COLORS.text }}>
        Upcoming Trains
      </p>
      <div
        className="schedule-container"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <Schedule schedule={trainSchedule} time={time} />
      </div>
      <div
        className="timer-container"
        style={{ backgroundColor: COLORS.black }}
      >
        <Timer time={time} />
      </div>
      <button className="schedule-button" onClick={startSchedule}>
        <em>jump to 07:00 (for testing)</em>
      </button>
    </div>
  );
};

export default TrainScheduleBase;
