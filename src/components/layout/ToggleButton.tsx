import React, { useContext } from "react";
import { ToggleContext } from "../../components/layout/ToggleContext";

const ToggleButton = () => {
  const { isToggled, toggle } = useContext(ToggleContext);

  return (
    <button onClick={toggle}>
      {isToggled ? "Button is toggled" : "Button is not toggled"}
    </button>
  );
};

export default ToggleButton;
