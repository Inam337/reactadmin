import { ListItemButton, ListItemIcon } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import colorConfigs from "../../../configs/colorConfigs"
import { Theme } from "../../layout/ThemeContext"

const SidebarItem = ({ item, onClickItems }) => {
  const { appState } = useSelector(state => state.appState)

  return item.sidebarProps && item.path ? (
    <ListItemButton
      onClick={onClickItems}
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: Theme.Dark
        },
        backgroundColor:
          appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
        paddingY: "12px",
        paddingX: "22px"
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null
}

export default SidebarItem
