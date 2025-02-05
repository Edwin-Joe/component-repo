import React from "react";
import {
  COLORS_DARK as darkTheme,
  COLORS as lightTheme,
  isDarkMode,
} from "../../utils/utils";

const Timer = ({ time }) => {
  const darkMode = isDarkMode();
  const COLORS = darkMode ? darkTheme : lightTheme;
  return (
    <h1 style={{ color: COLORS.white, margin: "0px" }}>
      {time.hours < 10 ? "0" + time.hours : time.hours}:
      {time.minutes < 10 ? "0" + time.minutes : time.minutes}
    </h1>
  );
};

export default Timer;
