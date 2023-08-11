import React, { useContext, useState, useEffect } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { ToggleContext } from "../../components/layout/ToggleContext";

type TopbarProps = {
  updateParentState: () => void;
};

const Topbar = ({ updateParentState }: TopbarProps) => {
  const { isToggled, toggle } = useContext(ToggleContext);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    updateParentState();
    toggle();
    if (!isToggled) {
      updateParentState();
      toggle();
    }
  };
  useEffect(() => {
    if (!open) {
      setOpen(!open);
      updateParentState();
    }
  }, [open]);
  return (
    <AppBar position="fixed" className="appbarmain">
      <MuiAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters></Toolbar>
          <button className="trigger" onClick={handleClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
          <button onClick={toggle}>
            {isToggled ? "Button is toggled" : "Button is not toggled"}
          </button>
        </Container>
      </MuiAppBar>
    </AppBar>
  );
};

export default Topbar;
