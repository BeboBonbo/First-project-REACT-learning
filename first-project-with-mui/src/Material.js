import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function Material() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          color="secondary"
          style={{ background: "#009688", color: "white" }}
          onClick={() => {
            alert("Clicked");
          }}
        >
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack>
    </>
  );
}
