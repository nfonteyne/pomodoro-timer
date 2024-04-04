import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Timer from "./components/Timer";
import { themes } from "./themes";
import { STATES_IDS } from "./const";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState("dark");
  const [customTheme, setCustomTheme] = React.useState(
    themes[STATES_IDS["focus"]]
  );

  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      // setCustomTheme("secondary");
    },
  };

  let theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // // palette values for light mode
            ...customTheme.light,
          }
        : {
            // palette values for dark mode
            ...customTheme.dark,
          }),
    },
  });

  theme = createTheme(theme, {
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant : "main" },
            style: {
              width: "80px",
              height: "80px",
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                border: "2px solid " + theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
              },
            },
          },
          {
            props: { variant: "main" },
            style: {
              width: "128px",
              height: "96px",
              borderRadius: "32px",
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                border: "2px solid " + theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.dark,
              },
            },
          },
          {
            props: { variant: "status" },
            style: {
              textTransform: "none",
              border: `2px dashed #fff}`,
            },
          },
        ],
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Timer customTheme={customTheme} setCustomTheme={setCustomTheme} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;