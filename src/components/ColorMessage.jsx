import React from "react";

const ColorMessage = (props) => {
  const colorMessagestyle = {
    color: props.color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={colorMessagestyle}>{props.message}</p>
    </>
  );
};

export default ColorMessage;
