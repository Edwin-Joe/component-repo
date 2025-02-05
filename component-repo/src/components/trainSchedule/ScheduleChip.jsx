import React from "react";
import {
  COLORS_DARK as darkTheme,
  COLORS as lightTheme,
  isDarkMode,
} from "../../utils/utils";
import Indicator from "./Indicator";

const ScheduleChip = ({ color = lightTheme.lime }) => {
  const darkMode = isDarkMode();
  const COLORS = darkMode ? darkTheme : lightTheme;
  return (
    <div
      style={{
        borderRadius: "27px",
        backgroundColor: COLORS.secondary,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "auto",
        height: "2em",
      }}
    >
      <Indicator size={20} color={color} />
      <p
        style={{
          fontSize: "16px",
          paddingRight: "8px",
          whiteSpace: "nowrap",
          color: COLORS.text,
        }}
      >
        {color === COLORS.lime ? "ON-TIME" : "TBA"}
      </p>
    </div>
  );
};

export default ScheduleChip;
