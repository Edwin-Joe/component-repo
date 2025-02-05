import React from "react";
import {
  COLORS_DARK as darkTheme,
  COLORS as lightTheme,
  isDarkMode,
  isMobile,
} from "../../utils/utils";
import ScheduleChip from "./ScheduleChip";
import EmptyRow from "./EmptyRow";
import "./styles/ScheduleRow.css";

const ScheduleRow = ({ train }) => {
  const isMobileDevice = isMobile();
  const darkMode = isDarkMode();
  const COLORS = darkMode ? darkTheme : lightTheme;

  return train.destination !== undefined ? (
    <div
      className="schedule-row"
      style={{ backgroundColor: COLORS.primaryLight }}
    >
      <div className="schedule-row-content">
        {!isMobileDevice ? <ScheduleChip /> : <></>}
        <p
          className="schedule-row-text"
          style={{
            fontSize: !isMobileDevice ? "18px" : "15px",
            color: COLORS.text,
          }}
        >
          {train.destination}
        </p>
      </div>
      <div className="schedule-row-eta">
        <div
          style={{
            border: `1px solid ${COLORS.background}`,
            height: "100%",
            width: "0px",
          }}
        ></div>
        <p
          className="schedule-row-eta-text"
          style={{
            fontSize: !isMobileDevice ? "18px" : "12px",
            color: COLORS.text,
          }}
        >
          ETA : {train.eta < 10 ? "0" + train.eta : train.eta}mins
        </p>
      </div>
    </div>
  ) : (
    <EmptyRow />
  );
};

export default ScheduleRow;
