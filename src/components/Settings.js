import { useState } from 'react';
import { Button, Box, Modal, Typography, Slider } from '@mui/material';


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

  const handleChange = (state, value) => {
    props.setStateTimes(prevStateTimes => ({
      ...prevStateTimes,
      [state]: value
    }));
    console.log("State times updated:", props.stateTimes);
  };
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Settings</Button>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4 }}>
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
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  </>
);
}

export default Settings;