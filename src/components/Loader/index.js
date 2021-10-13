import React from "react";
import "./style.css";

export default function Loader({ color, size, className, style }) {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        key={index}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      ></div>
    );
  });
  return (
    <div className="lds-ring" style={{ width: size, height: size, ...style }}>
      {circles}
    </div>
  );
}

Loader.defaultProps = {
  color: "#7f58af",
  size: 80,
  className: "",
  style: {},
};
