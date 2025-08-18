// // import * as React from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import { deepOrange, deepPurple } from "@mui/material/colors";
// import Checkbox from "@mui/material/Checkbox";
// import Slider from "@mui/material/Slider";
// import Chip from "@mui/material/Chip";
// import Container from '@mui/material/Container';

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// export default function Material() {
//   return (
//     <>
//     <Container maxWidth="md">
//       <Stack direction="row" spacing={2}>
//         <Button
//           color="primary"
//           onClick={() => {
//             alert("Clicked");
//           }}
//         >
//           Secondary
//         </Button>
//         <Button variant="contained" color="success">
//           Success
//         </Button>
//         <Button variant="outlined" color="error">
//           Error
//         </Button>
//         <Slider aria-label="Volume" />
//         <Stack direction="row" spacing={1}>
//           <Chip label="primary" color="primary" />
//           <Chip label="success" color="success" />
//         </Stack>
//         <Checkbox {...label} />
//       </Stack>
//       </Container>
//       {/* <Stack direction="row" spacing={2}>
//         <Avatar>H</Avatar>
//         <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
//         <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
//       </Stack> */}
//     </>
//   );
// }

//! import Button from "@mui/material/Button";
//! import DeleteIcon from "@mui/icons-material/Delete";
//! import SendIcon from "@mui/icons-material/Send";
//! import Stack from "@mui/material/Stack";
//! import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

//! export default function IconLabelButtons() {
//!   return (
//!     <Stack direction="row" spacing={2}>
//!         <AddToPhotosIcon style={{color: "red", fontSize: "40px"}} />
//!       <Button variant="outlined" startIcon={<DeleteIcon />}>
//!         Delete
//!       </Button>
//!       <Button variant="contained" endIcon={<SendIcon />}>
//!         Send
//!       </Button>
//!     </Stack>
//!   );
//! }

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function DisabledAccordion() {
  const [checked, setChecked] = React.useState(true);
  return (
    <Container maxWidth="md" style={{ marginTop: "200px" }}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Switch
              {...label}
              value={checked}
              onChange={() => {
                setChecked((prev) => !prev);
              }}
              defaultChecked
            />
          </AccordionDetails>
        </Accordion>
      </div>
      <Collapse in={checked} collapsedSize={100}>
        <div style={{ height: "400px", background: "orange" }}>
          <h1>Hello World</h1>
        </div>
      </Collapse>
    </Container>
  );
}
