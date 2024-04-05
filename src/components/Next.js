import * as React from "react";
import Button from "@mui/material/Button";

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