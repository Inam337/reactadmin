import {
  Drawer,
  IconButton,
  List,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import * as React from "react"
import Box from "@mui/material/Box"
import MuiAppBar from "@mui/material/AppBar"
import appRoutes from "../../../routes/appRoutes"
import SidebarItem from "./SidebarItem"
import SidebarItemCollapse from "./SidebarItemCollapse"
import { styled, useTheme } from "@mui/material/styles"
import Divider from "@mui/material/Divider"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}))
const Sidebar = ({ updateSideBarState }) => {
  const theme = useTheme()

  const [open, setOpen] = React.useState(true)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className="sidebar">
      <div>
        {["left"].map(anchor => (
          <React.Fragment key={anchor}>
            <Box sx={{ display: "flex" }}>
              <AppBar position="fixed" open={open} color="primary">
                <Toolbar>
                  <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="secondary"
                  >
                    Material UI Drawer with Sidebar Items
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box"
                  }
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      // eslint-disable-next-line react/jsx-no-undef
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </DrawerHeader>
                <Divider />
                <List disablePadding>
                  <Toolbar sx={{ marginBottom: "20px" }}>
                    <Stack
                      sx={{ width: "100%" }}
                      direction="row"
                      justifyContent="center"
                    >
                      {/* <Avatar src={assets.images.logo} /> */}
                    </Stack>
                  </Toolbar>
                  {appRoutes.map((route, index) =>
                    route.sidebarProps ? (
                      route.child ? (
                        <SidebarItemCollapse item={route} key={index} />
                      ) : (
                        <SidebarItem item={route} key={index} />
                      )
                    ) : null
                  )}
                </List>
              </Drawer>
            </Box>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
export default Sidebar
