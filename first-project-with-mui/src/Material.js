// import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import Container from '@mui/material/Container';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Material() {
  return (
    <>
    <Container maxWidth="md">
      <Stack direction="row" spacing={2}>
        <Button
          color="primary"
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
        <Slider aria-label="Volume" />
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
        </Stack>
        <Checkbox {...label} />
      </Stack>
      </Container>
      {/* <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack> */}
    </>
  );
}
