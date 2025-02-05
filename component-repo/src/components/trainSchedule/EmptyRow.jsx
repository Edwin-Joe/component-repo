import {
  COLORS_DARK as darkTheme,
  COLORS as lightTheme,
  isDarkMode,
  isMobile,
} from "../../utils/utils";
import ScheduleChip from "./ScheduleChip";

const EmptyRow = () => {
  const isMobileDevice = isMobile();
  const darkMode = isDarkMode();
  const COLORS = darkMode ? darkTheme : lightTheme;
  return (
    <div
      style={{
        height: "60px",
        borderRadius: "15px",
        backgroundColor: COLORS.primaryLight,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "8px",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginBottom: "8px",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {!isMobileDevice ? <ScheduleChip color={COLORS.yellow} /> : <></>}
        <p
          style={{
            paddingLeft: "16px",
            fontSize: "18px",
            width: "100%",
            color: COLORS.text,
          }}
        >
          ---
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            border: `1px solid ${COLORS.background}`,
            height: "100%",
            width: "0px",
          }}
        ></div>
        <p
          style={{
            padding: "16px",
            fontSize: !isMobileDevice ? "18px" : "12px",
            color: COLORS.text,
          }}
        >
          {" "}
          ETA :---mins
        </p>
      </div>
    </div>
  );
};

export default EmptyRow;
