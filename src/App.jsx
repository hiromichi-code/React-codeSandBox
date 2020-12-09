import React from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <ColorMessage color="Blue" message="Hello React !" />
      <ColorMessage color="green" message="Hello World !" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
