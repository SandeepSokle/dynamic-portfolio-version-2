import * as React from "react";
import Box from "@mui/material/Box";
import "./header.css";
import { useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { display } from "@mui/system";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "add your story",
    imgPath:
      "https://source.unsplash.com/1600x900/?story=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Share your inspirations",
    imgPath:
      "https://source.unsplash.com/1600x900/?share=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "MAKE IT EASY TO NAVIGATE",
    imgPath:
      "https://source.unsplash.com/1600x900/?navigate=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "DON'T BE AFRAID TO INCLUDE PERSONAL WORK IN YOUR DIGITAL PORTFOLIO",
    imgPath:
      "https://source.unsplash.com/1600x900/?brave=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "A GOOD PORTFOLIO SHOULD TELL A STORY",
    imgPath:
      "https://source.unsplash.com/1600x900/?good,story=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Begin by creating a portfolio of pieces you can use to market yourself",
    imgPath:
      "https://source.unsplash.com/1600x900/?creative=format&fit=crop&w=1400&h=1250&q=60",
  },
];

function InfoContainer() {
  const [open, setOpen] = React.useState(false);
  const history = useNavigate();

  const handleToggleOpen = () => {
    setOpen(true);
  };

  const handleToggleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "98vw",
        overflowY: "hidden",
        padding: "4rem 4rem",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                {" "}
                <Box
                  component="img"
                  sx={{
                    // height: 255,
                    display: "block",
                    // maxWidth: 400,
                    overflow: "hidden",
                    //   width: "100%",
                    height: "80vh",
                    objectFit: "cover",
                    // position: "absolute",
                    opacity: 0.5,
                    borderRadius : "9px"
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box
                  // className="createBtn"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // width: 400,
                    bgcolor: "rgb(123 343 225 / 12%)",
                    color: "white",
                    // border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    fontSize: "2rem",
                    fontWeight: "bold",
                    borderRadius: "24px",
                    // cursor: "pointer",
                    // zIndex: 11,
                    textTransform: "capitalize",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textShadow: "0px 0px 12px purple"
                  }}
                  // onMouseEnter={(e) => {
                  //   e.preventDefault();
                  //   handleToggleOpen();
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.preventDefault();
                  //   handleToggleClose();
                  // }}
                  // onClick={() => {
                  //   history(`../login`, { replace: false });
                  // }}
                >
                  {step.label.toLowerCase()}
                </Box>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default InfoContainer;
