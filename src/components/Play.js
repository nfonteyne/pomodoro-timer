import Button from "@mui/material/Button";

function Play(props) {
  return <Button  variant="contained" onClick={props.handleClick} >Play</Button>;
}

export default Play;