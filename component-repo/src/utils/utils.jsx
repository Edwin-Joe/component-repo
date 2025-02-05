export const DARK_MODE_LOCAL_KEY = "ntiDarkModeEnabled";

export const COLORS = {
  primary: "#E8E8E8",
  primaryLight: "#FFFFFF",
  secondary: "#D9D9D9",
  black: "#000000",
  white: "white",
  background: "#1E1E1E",
  yellow: "#FCBA03",
  lime: "lime",
  text: "black",
};

export const COLORS_DARK = {
  primary: "#393939",
  primaryLight: "#757575",
  secondary: "#434242",
  black: "#000000",
  background: "#1E1E1E",
  yellow: "#FCBA03",
  lime: "lime",
  text: "white",
  white: "white",
};

// mocking api response:
export const trainMockSchedule = [
  {
    id: "54f9f920-0ff6-40fb-97bf-4334bc90b8ac",
    destination: "Central Station",
    frequency: 20,
    start: "undefined",
    end: "undefined",
  },
  {
    id: "130acfcf-f1bd-4ec3-bc9c-bad57b35e8c8",
    destination: "Circular",
    frequency: 60,
    start: "undefined",
    end: "undefined",
  },
  {
    id: "99324f50-054d-44d2-9bd8-2a4fa8d05f5d",
    destination: "North Square",
    frequency: 12,
    start: "07:00",
    end: "22:00",
  },
  {
    id: "f1e9a5e1-2b2d-4c4e-8b3b-0c3a9e3d3b1c",
    destination: "West Market",
    frequency: 60,
    start: "05:30",
    end: "01:30",
  },
];

export const emptyTrain = {
  destination: undefined,
  eta: 0,
};

export const generateTrainSchedule = (schedule) => {
  const trains = [];
  schedule.forEach((item) => {
    const start = item.start !== "undefined" ? toMinutes(item.start) : 300;
    const end = item.end !== "undefined" ? toMinutes(item.end) : 1740; // 05:00 to 05:00 schedule
    for (let i = start; i <= end; i += item.frequency) {
      trains.push({
        time: i <= 1440 ? i : i - 1440,
        destination: item.destination,
      });
    }
  });
  trains.sort((a, b) => a.time - b.time);
  return trains;
};

export const toMinutes = (time) => {
  const minsArray = time.split(":");
  let vTime = parseInt(minsArray[0]) * 60 + parseInt(minsArray[1]);
  if (vTime < 300) {
    vTime += 1440;
  }
  return vTime;
};

export const vTimeToMinutes = (hours, minutes) => hours * 60 + minutes;

export const findNextTrains = (schedule, vTime) => {
  let validTrains = schedule
    .map((train) => ({ ...train, eta: train.time - vTime }))
    .filter((train) => train.eta > 0 && train.eta <= 15);
  validTrains.sort((a, b) => a.eta - b.eta);

  let firstTrain = validTrains[0] || emptyTrain;
  let secondTrain = validTrains[1] || emptyTrain;

  return [firstTrain, secondTrain];
};

export const isDarkMode = () => {
  return localStorage.getItem(DARK_MODE_LOCAL_KEY) === "true";
};

export const toggleDarkMode = () => {
  const darkModeEnabled = isDarkMode();
  localStorage.setItem(DARK_MODE_LOCAL_KEY, !darkModeEnabled);
};

export const isMobile = () =>
  /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
