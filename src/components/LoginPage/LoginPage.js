import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link as Redirect } from "react-router-dom";
import {
  createUserWithEmailPassword,
  loginWithEmailPassword,
  loginWithGoogle,
} from "../../firebase/firebase_config";
import { useDispatch, useSelector } from "react-redux";
import { loginUserActionCreater } from "../../Redux/getDataActionCreater";
import { loaderEndActionCreater } from "../../Redux/Loader/LoaderActionCreator";
import GoogleIcon from "@mui/icons-material/Google";
const theme = createTheme();

export default function LoginPage() {
  const [loginState, setLoginState] = React.useState("signin");
  const [user, setUser] = React.useState();
  const history = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => {
    // console.log(state.data.user);
    return state.data.user;
  });

  React.useEffect(() => {
    if (userData) {
      history("/dashboard", { replace: false });
    }
    dispatch(loaderEndActionCreater());
  }, [userData]);

  // console.log(userData)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   confirmPassword: data.get("confirmPassword"),
    // });

    if (loginState === "signin") {
      let userDetail = await loginWithEmailPassword(
        data.get("email"),
        data.get("password"),
        dispatch
      );
      if (userDetail) {
        // console.log("user!!", userDetail);
        setUser(userDetail);
        dispatch(loginUserActionCreater(userDetail));
        // history.push("/admin");
      }
    } else {
      if (data.get("password") === data.get("confirmPassword")) {
        let userDetail = await createUserWithEmailPassword(
          data.get("email"),
          data.get("displayName"),
          data.get("password"),
          dispatch
        );
        if (userDetail) {
          // console.log("user!!", userDetail);
          setUser(userDetail);
          dispatch(loginUserActionCreater(userDetail));
          // history.push("/admin");
        }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {`${loginState === "signin" ? "Sign in" : "Sign up"}`}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {loginState === "signin" ? (
                ""
              ) : (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="displayName"
                  label="Enter Full Name"
                  type="text"
                  id="password"
                  autoComplete="displayName"
                  autoFocus
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {loginState === "signin" ? (
                ""
              ) : (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
              >
                {`${loginState === "signin" ? "Sign in" : "Sign up"}`}
              </Button>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 1,
                  mb: 2,
                  background: "#d2504d",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // fontSize: "1rem",
                  fontWeight: "bold",
                }}
                variant="contained"
                onClick={async (e) => {
                  e.preventDefault();
                  let userDetail = await loginWithGoogle();
                  if (userDetail) {
                    console.log("user!!", userDetail);
                    setUser(userDetail);
                    dispatch(loginUserActionCreater(userDetail));
                    history("/", { replace: true });
                  }
                }}
              >
                <GoogleIcon
                  sx={{
                    mr: 2,
                  }}
                />
                <div
                  style={{
                    padding: ".2rem",
                  }}
                >
                  Sign in with google
                </div>
              </Button>{" "}
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid item xs>
                  <Link
                    href=""
                    variant="body2"
                    onClick={(e) => {
                      e.preventDefault();
                      if (loginState === "signin") {
                        setLoginState("signup");
                      } else {
                        setLoginState("signin");
                      }
                    }}
                  >
                    {`${
                      loginState === "signin" ? "Sign up new User." : "Sign in"
                    }`}
                  </Link>
                </Grid>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
