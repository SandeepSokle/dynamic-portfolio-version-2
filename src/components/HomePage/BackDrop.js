import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

export default function SimpleBackdrop(props) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

//   console.log(open)
  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: 10 }}
        open={open}
        onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </div>
  );
}
