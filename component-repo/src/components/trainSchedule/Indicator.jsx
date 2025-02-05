import React from "react";

const Indicator = ({ size = 100, color = "lime" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    ></div>
  );
};

export default Indicator;
