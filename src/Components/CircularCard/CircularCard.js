import React from "react";
import "./CircularCard.css";

const CircularCard = ({ Icon, count, label, iconColor, hightLight }) => {
  return (
    <div
      className={`my-12 border-white border-2 border-solid rounded-full flex flex-col items-center justify-center circularCard ${
        hightLight && "hightlight-border"
      }`}
    >
      <Icon style={{ color: iconColor || "white" }} fontSize="large" />
      <h2 className="my-2">{count}</h2>
      <p className="opacity-50">{label}</p>
    </div>
  );
};

export default CircularCard;
