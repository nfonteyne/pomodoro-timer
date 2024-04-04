export const STATES_IDS = {
    focus: "focus",
    shortBreak: "shortBreak",
    longBreak: "longBreak",
  };
  
export const STATE_INFO = {
[STATES_IDS.focus]: "Focus",
[STATES_IDS.shortBreak]: "Short Break",
[STATES_IDS.longBreak]: "Long Break",
};

export const STATE_SECONDS = {
[STATES_IDS.focus]: 1500,
[STATES_IDS.shortBreak]: 300,
[STATES_IDS.longBreak]: 1500,
};

export const STATE_FLOW = [
STATES_IDS.focus,
STATES_IDS.shortBreak,
STATES_IDS.focus,
STATES_IDS.shortBreak,
STATES_IDS.focus,
STATES_IDS.shortBreak,
STATES_IDS.focus,
STATES_IDS.longBreak,
];
