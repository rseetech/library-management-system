import { IconButton, Menu, MenuItem, styled, Toolbar, Tooltip } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../src/Assets/logo.svg";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopAppBar = ({ open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isProfileMenuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        variant="dense"
        disableGutters
        sx={{ pl: 1, pr: 1, maxHeight: 50, minHeight: 30 }}
      >
        <IconButton
          size="small"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1, ...(open && { display: "none" }) }}
        >
          <img src={logo} alt="logo" style={{ height: "30px"}} />
        </IconButton>
        {open ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuOpenIcon />
          </IconButton>
        )}
        
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-controls={isProfileMenuOpen ? "Account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isProfileMenuOpen ? "true" : undefined}
            style={{ backgroundColor: "white", height: 16, width: 16 }}
            aria-label="menu"
          >
            <PersonIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="Account-menu"
          anchorEl={anchorEl}
          open={isProfileMenuOpen}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
