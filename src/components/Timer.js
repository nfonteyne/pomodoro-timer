import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
//import * as React from "react";

import Settings from "./Settings";
import Play from "./Play";
import Next from "./Next";
import { themes } from "../themes";
import { STATE_FLOW, STATE_SECONDS, STATES_IDS, STATE_INFO } from "../const";
import ThemeMode from "./ThemeMode";
import ShowState from "./ShowState";

const Timer = (props) => {
  const [startTimer, setStartTimer] = useState(false);
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [state, setState] = useState(STATE_INFO[[STATES_IDS.focus]]);

  const [stateTimes, setStateTimes] = useState({
    focus: STATE_SECONDS[[STATES_IDS.focus]],
    shortBreak: STATE_SECONDS[[STATES_IDS.shortBreak]],
    longBreak: STATE_SECONDS[[STATES_IDS.longBreak]]
  });

  const [time, setNewTime] = useState(stateTimes[STATE_FLOW[currentFlowIndex]]);
  const minutes = Math.floor(time / 60);
  const seconds = String(Math.floor(time % 60)).padStart(2, '0');



  const handleStartTimer = () => {
    setStartTimer(!startTimer)
  };

  const handleSetState = () => {
    setCurrentFlowIndex(
      currentFlowIndex === STATE_FLOW.length - 1 ? 0 : currentFlowIndex + 1
    );
  };

  useEffect(() => {
    setState(STATE_INFO[STATE_FLOW[currentFlowIndex]]);
    setNewTime(stateTimes[STATE_FLOW[currentFlowIndex]]);
    props.setCustomTheme(themes[STATE_FLOW[currentFlowIndex]]);
  }, [currentFlowIndex, props, stateTimes]);

  useEffect(() => {
    if (startTimer) {
      const interval = setTimeout(() => {
        time > 0 && setNewTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, startTimer]);

  useEffect(() => {
    document.title = `${minutes}:${seconds} ${state}`;
  
    if (time === 0) {
      handleSetState();
    }
  }, [time]);


  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} marginTop = {2}>
      <Box position="absolute" 
        top={0} 
        right={0} 
        p={2} 
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"} 
        gap={"20px"}>
        <ThemeMode />
      </Box>
      <Box borderRadius={10}  textAlign="center"  margin="auto"  sx={{ p: 2,border:'2px dashed primary' , borderColor:"primary.main", borderStyle:"dashed"}}>
            <Typography><ShowState state={state}/>{state}</Typography>
      </Box>
      <Box fontSize={"256px"} flexDirection={"column"} justifyContent={"center"} >
        <Typography  fontSize={"256px"}>
          {minutes}:{seconds}
        </Typography>
      </Box>
      <Box  display={"flex"}  flexDirection={"row"}  justifyContent={"center"}   gap={"20px"}>
        <Settings stateTimes={stateTimes} setStateTimes={setStateTimes}/>
        <Play handleClick={handleStartTimer}/>
        <Next handleClick={handleSetState}/>
      </Box>
    </Box>
  );
};

export default Timer;