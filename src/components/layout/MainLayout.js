import { Outlet } from "react-router-dom";
import { Box, Toolbar, Button, Typography, Card } from "@mui/material";
import Sidebar from "../common/Sidebar/Sidebar";
import Topbar from "../common/Topbar";
import { useState } from "react";
import { ToggleProvider } from "./ToggleContext";
import { useTheme } from "@mui/material/styles";
import { buttonStyles } from "../../theme/styles";
const MainLayout = () => {
  const [isClassAdded, setIsClassAdded] = useState(true);
  const theme = useTheme();
  const buttonClasses = buttonStyles(theme);
  const updateChildState = () => {
    setIsClassAdded(!isClassAdded); // Toggle the boolean value
  };
  const changeSidebarState = () => {
    if (!isClassAdded) {
      setIsClassAdded(!isClassAdded);
    } else {
      setIsClassAdded(isClassAdded);
    }
  };
  return (
    <ToggleProvider>
      <div className={isClassAdded ? "main-app" : "main-app is-open"}>
        <Box sx={{ display: "flex" }}>
          <Sidebar updateSideBarState={changeSidebarState} />

          {/* ... rest of the component */}

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              // width: `calc(100% - ${sizeConfigs.sidebar.width})`,
              minHeight: "100vh",
              //  backgroundColor: colorConfigs.mainBg,
            }}
          >
            {/* <Topbar updateParentState={updateChildState} /> */}
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </div>
    </ToggleProvider>
  );
};

export default MainLayout;
