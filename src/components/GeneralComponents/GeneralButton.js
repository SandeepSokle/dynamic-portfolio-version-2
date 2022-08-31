import { Button } from "@mui/material";
import { useHistory, useNavigate } from "react-router-dom";
import "./GeneralButton.css";
export const GeneralButton = (props) => {
  const { title, btnColor, disabled, link } = props;
  // console.log(props);
  const history = useNavigate();
  const handleOpenLink = (name) => {
    window.open(link, "_blank", "noopener,noreferrer");
    // window.location.href = links[name];
  };
  return (
    <Button
      className="btn"
      sx={{
        // fontSize: "1rem",
        // padding: "2px 1px",
        m: 1,
        // width : "16rem",
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
        // textTransform: "capitalize",
      }}
      disabled={disabled ? true : false}
      //   color={btnColor ? btnColor : ""}
      color={`${btnColor ? btnColor : "primary"}`}
      variant="contained"
      onClick={(e) => {
        // if (title.toLowerCase() === "projects") return;
        e.preventDefault();
        if (link) handleOpenLink();
        if (title === "Projects") {
          history(`/projects`, { replace: false });
        }
        if (title === "Blogs") {
          history(`/blogs`, { replace: false });
        }
      }}
    >
      {title}
      <props.btnIcon
        style={{
          marginLeft: "6px",
        }}
      />
    </Button>
  );
};
