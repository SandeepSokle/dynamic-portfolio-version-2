import * as React from "react";
import Box from "@mui/material/Box";
import "./header.css";
import SimpleBackdrop from "./BackDrop";
import { useNavigate } from "react-router";

const images = [
  {
    label: "Bird",
    imgPath:
      "https://source.unsplash.com/1600x900/?sea,laptop,it=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://source.unsplash.com/1600x900/?nature=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://source.unsplash.com/1600x900/?software,engineer=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://source.unsplash.com/1600x900/?software=format&fit=crop&w=1400&h=1250&q=60",
  },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const history = useNavigate();

  const handleToggleOpen = () => {
    setOpen(true);
  };

  const handleToggleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
  
        <div key={images[0].label}>
          <Box
            component="img"
            sx={{
              // height: 255,
              display: "block",
              // maxWidth: 400,
              overflow: "hidden",
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "relative",
            }}
            src={images[0].imgPath}
            alt={images[0].label}
          />
          <Box
            className="createBtn"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              // width: 400,
              bgcolor: "rgb(103 143 245 / 42%)",
              color: "white",
              // border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              fontSize: "2rem",
              fontWeight: "bold",
              borderRadius: "24px",
              cursor: "pointer",
              zIndex: 11,
            }}
            onMouseEnter={(e) => {
              e.preventDefault();
              handleToggleOpen();
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              handleToggleClose();
            }}
            onClick = {()=>{
              history(`../login`, { replace: false });
            }}
          >
         
              Create Your Profile
          </Box>

          <SimpleBackdrop open={open} setOpen={setOpen} />
        </div>
    </Box>
  );
}

export default Header;
