import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
// import {  useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavbarTop = (props) => {
  const {
    open,
    toggleDrawer,
    anchorEl,
    handlePopoverOpen,
    handlePopoverClose,
    setSelectedTab,
  } = props;
  const open1 = Boolean(anchorEl);
  // const history = useNavigate();

  const userData = useSelector((state) => {
    return state.data.user;
  });

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                width: "max-content",
                marginLeft: "16px",
                padding: "0rem 1rem",
                fontSize: "1rem",
                textDecoration: "underline",
              }}
              onClick={() => {
                setSelectedTab("/");
              }}
            >
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <ArrowLeftIcon sx={{ fontSize: 40, marginRight: "-10px" }} />
              </IconButton>
              Back to Home
            </div>
            <div
              style={{
                cursor: "pointer",
                width: "max-content",
                marginLeft: "16px",
                padding: "0rem 1rem",
              }}
            >
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <SearchIcon sx={{ fontSize: 30 }} />
              </IconButton>
              Search User
            </div>
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.3rem",
              }}
            >
              Sandeep Kumar
            </div>
            <Typography
              aria-owns={open1 ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              //   onClick={handleClick}
              sx={{
                m: "0rem 0.8rem",
              }}
            >
              {/* Hover with a Popover. */}
              <Avatar
                alt={`${userData?.displayName}`}
                src={`${userData?.photoURL}`}
              />
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarTop;
