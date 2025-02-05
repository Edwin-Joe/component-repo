import TrainScheduleBase from "../trainSchedule/TrainScheduleBase";
import {
  COLORS,
  isDarkMode,
  trainMockSchedule,
  toggleDarkMode,
} from "../../utils/utils";
import { useState } from "react";
import lightBulb from "../../assets/lightBulb.png";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(isDarkMode());
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          height: "100px",
          width: "100%",
          display: "flex",
          alignItems: "end",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1
          style={{
            paddingLeft: "32px",
            paddingBottom: "8px",
          }}
        >
          Component repository
        </h1>
      </div>
      <div
        style={{
          paddingTop: "16px",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "50px",
        }}
      >
        <h2>Train schedule indicator</h2>
        <p style={{ width: "500px" }}>
          Component showing trains on a mock schedule arriving within 15 mins,
          at most the two latest trains are shown. Supports dark mode and mobile
          view. Schedule starts at 05:00 and continues infinitely. 1 minute
          passes for every second in real time.
        </p>
        <a
          href="https://www.figma.com/design/VxPMkgBmr4dkzKKYsvJnka/NTI?m=auto&t=LtGhZqXCUMNMubPi-1"
          target="_blank"
          rel="noreferrer"
          style={{ paddingBottom: "32px" }}
        >
          Figma Design
        </a>
        <button
          className="toggle-button"
          style={{
            backgroundColor: COLORS.background,
            width: "50px",
            borderRadius: "40%",
            marginBottom: "16px",
          }}
          onClick={() => {
            toggleDarkMode();
            setDarkMode(!darkMode);
          }}
        >
          <img
            src={lightBulb}
            alt="toggle dark mode"
            width="30px"
            height="30px"
          />
        </button>
        <TrainScheduleBase schedule={trainMockSchedule} />
      </div>
    </div>
  );
};

export default HomePage;
