import { Box, CssBaseline, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import TopAppBar from "./TopAppBar";
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 0),
  marginBottom: 2
}));

const DefaultLayout = (props) => {

  const { children } = props;
  const [ open, setOpen] = useState(true);
  const [value, setValue] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" sx={{ height: "100vh" }}>
      <CssBaseline />
      <TopAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideDrawer open={open} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, backgroundColor: "#f4f6f9", height: "100%" }}
      >
        <DrawerHeader sx={{ minHeight: 16, maxHeight: 24 }} />
        {children}
      </Box>
        </Box>
  );
};

export default DefaultLayout;
