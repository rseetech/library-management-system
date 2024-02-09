import { createTheme } from "@mui/material";
import { completePalette } from "./ThemeData/Colors";

const myTheme = createTheme({
  palette: completePalette,
    menu: {
      fontSize: 12,
      fontWeight: "bold",
      textAlign: "left"
    },
    myNotifications: {
      fontSize: 14
    }
});

export default myTheme;
