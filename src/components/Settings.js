import { useState } from 'react';
import { Button, Box, Modal, Typography, Slider, Switch } from '@mui/material';
import { ColorModeContext } from "../App";
import { useContext } from "react";
import { useTheme } from '@emotion/react';


// Function to format time in minutes:seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function Settings(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleChange = (state, value) => {
    props.setStateTimes(prevStateTimes => ({
      ...prevStateTimes,
      [state]: value
    }));
    console.log("State times updated:", props.stateTimes);
    console.log(theme.palette.mode)
  };

  const modalWidth = window.innerWidth > 600 ? 400 : '90%'; // Adjust the width based on screen size

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Settings</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: modalWidth, bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4 }}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adjust State Times
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Focus: {formatTime(props.stateTimes.focus)} minutes
            <Slider
              value={props.stateTimes.focus}
              onChange={(event, newValue) => handleChange("focus", newValue)}
              min={60}
              max={3600}
              step={60}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
            Short Break: {formatTime(props.stateTimes.shortBreak)} minutes
            <Slider
              value={props.stateTimes.shortBreak}
              onChange={(event, newValue) => handleChange("shortBreak", newValue)}
              min={60}
              max={1800}
              step={60}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
            Long Break: {formatTime(props.stateTimes.longBreak)} minutes
            <Slider
              value={props.stateTimes.longBreak}
              onChange={(event, newValue) => handleChange("longBreak", newValue)}
              min={60}
              max={3600}
              step={60}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </Typography>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={"20px"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" width="34" height="34">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            <Switch checked={theme.palette.mode === 'light'} onChange={colorMode.toggleColorMode} ></Switch>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" width="34" height="34">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </Box>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
}

export default Settings;
