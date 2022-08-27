import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
// import {  useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Badge from "@mui/material/Badge";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useState } from "react";
import { Button, Popover } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUserActionCreater } from "../../Redux/getDataActionCreater";
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
  const { open, toggleDrawer } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElModel, setAnchorElModel] = useState(null);

  const dispatch = useDispatch();
  const history = useNavigate();

  const userData = useSelector((state) => {
    return state.data.user;
  });

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorElModel(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElModel(null);
  };

  const openModel = Boolean(anchorElModel);
  const id = openModel ? "simple-popover" : undefined;

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
            <div>
              <Badge
                badgeContent={4}
                color="error"
                sx={{
                  mr: 4,
                  cursor: "pointer",
                }}
              >
                <NotificationsActiveIcon sx={{ fontSize: 25 }} />
              </Badge>
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                cursor: "default",
              }}
            >
              {userData?.displayName || ""}
            </div>
            <Typography
              aria-owns={open1 ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              onClick={handleClick}
              sx={{
                m: "0rem 0.8rem",
                cursor: "pointer",
              }}
            >
              {/* Hover with a Popover. */}
              <Avatar
                alt={`${userData?.displayName}`}
                src={`${userData?.photoURL}`}
              />
            </Typography>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open1}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, textAlign: "center" }}>
                <div
                  style={{
                    margin: "0px 10px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {userData?.displayName}
                </div>
                <div
                  style={{
                    margin: "0px 10px",
                    fontSize: "18px",
                    // fontWeight: "bold",
                  }}
                >
                  {" "}
                  {userData?.email}
                </div>
              </Typography>
            </Popover>
            <Popover
              id={id}
              open={openModel}
              anchorEl={anchorElModel}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2, textAlign: "center" }}>
                <div
                  style={{
                    margin: "8px 1px",
                    marginTop: "0px",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {userData?.displayName}
                </div>
                <div
                  style={{
                    margin: "8px 1px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                  }}
                >
                  {" "}
                  {userData?.email}
                </div>
                <div
                  style={{
                    margin: "8px 1px",
                    // fontSize: "20px",
                    // fontWeight: "bold",
                  }}
                >
                  {/* <Button
                        // sx={{
                        //   m: "8px 0px",
                        //   mb: "0px",
                        //   // fontSize: "18px",
                        //   // fontWeight: "bold",
                        // }}
                        variant="text"
                        onClick={() => {
                          setOpenSecretModel(true);
                          handleOpenSecretModel();
                        }}
                      >
                        Add secret Key
                      </Button> */}
                </div>
                <Button
                  sx={{
                    m: "8px 0px",
                    mb: "0px",
                    // fontSize: "18px",
                    // fontWeight: "bold",
                  }}
                  variant="contained"
                  onClick={() => {
                    dispatch(logoutUserActionCreater());
                    // history.push("/");
                    handleClose();
                    history("/", { replace: false });
                  }}
                >
                  Sign Out
                </Button>
              </Typography>
            </Popover>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarTop;
