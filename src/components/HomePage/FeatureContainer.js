import { Box } from "@mui/material";
import FeatureContainerHelper from "./FeatureContainerHelper";

const FeatureList = [
  {
    title: "Easy To Maintain",
    des: "You can add any feature for your portfolio, only using Dashboard",
  },
  {
    title: "Information About Yourself",
    des: `Don't be afraid to break away from a professional tone to share your thoughts, feelings and opinions while you tell your story. You don't need to tell your life story, but you should mention any obstacles you've overcome in your niche.`,
  },
  {
    title: "Information About Yourself",
    des: `Don't be afraid to break away from a professional tone to share your thoughts, feelings and opinions while you tell your story. You don't need to tell your life story, but you should mention any obstacles you've overcome in your niche.`,
  },
  {
    title: "Easy To Maintain",
    des: "You can add any feature for your portfolio, only using Dashboard",
  },
  {
    title: "Easy To Maintain",
    des: "You can add any feature for your portfolio, only using Dashboard",
  },
  {
    title: "Information About Yourself",
    des: `Don't be afraid to break away from a professional tone to share your thoughts, feelings and opinions while you tell your story. You don't need to tell your life story, but you should mention any obstacles you've overcome in your niche.`,
  },
  {
    title: "Information About Yourself",
    des: `Don't be afraid to break away from a professional tone to share your thoughts, feelings and opinions while you tell your story. You don't need to tell your life story, but you should mention any obstacles you've overcome in your niche.`,
  },
  {
    title: "Easy To Maintain",
    des: "You can add any feature for your portfolio, only using Dashboard",
  },
];

const FeatureContainer = ({open}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        width: "98vw",
        overflowY: "hidden",
        padding: "2rem 6rem",
        paddingLeft : `${`${open ? "16rem" : "6rem"}`}`
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2.5rem",
          fontFamily: "serif",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Why Dynamic Portfolio
      </div>
      <div
        style={{
          // flexGrow: 1,
          // position: "relative",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          //   justifyContent: "center",
          width: "100%",
          overflowY: "hidden",
          // padding: "2rem 6rem",
        }}
      >
        {FeatureList.map((ele, idx) => {
          return <FeatureContainerHelper data={ele} idx={idx} />;
        })}
      </div>
    </Box>
  );
};

export default FeatureContainer;
