import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../App";

function Next({handleClick}) {
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Next
      </Button>
    </>
  );
}

export default Next;