// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { Button, Typography } from "@mui/material";
import { getDataActionCreater } from "../../Redux/getDataActionCreater";
// import { callBlogsUpdates } from "../HandleFunctions/handleFunctions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  width: "30%",
  minWidth: "16rem",
  height: "max-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  lineBreak: "anywhere",
  margin: "1rem 5px",
};

export default function Blogs() {
  const [data, setData] = useState();

  return <h1>Blogs</h1>;
}
