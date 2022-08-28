import { Box } from "@mui/material";

const colorCodeList = [
  {
    color: "2v4ec7",
    url: "https://source.unsplash.com/1600x900/?nature=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    color: "2a4ec7",
    url: "https://source.unsplash.com/1600x900/?mountain=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    color: "1838a3",
    url: "https://source.unsplash.com/1600x900/?sea=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    color: "4063d6",
    url: "https://source.unsplash.com/1600x900/?cloud=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    color: "1d378c",
    url: "https://source.unsplash.com/1600x900/?forest=format&fit=crop&w=1400&h=1250&q=60",
  },
];

const FeatureContainerHelper = ({ data, idx }) => {
  const style =
    idx % 2 === 0
      ? {
          heigth: "100%",
          width: "13%",
          background: `url(${colorCodeList[idx % colorCodeList.length].url})`,
          //   borderRadius: "6px",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        }
      : {
          heigth: "100%",
          width: "13%",
          background: `url(${colorCodeList[idx % colorCodeList.length].url})`,
          //   borderRadius: "6px",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
        };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        m: 1,
        width: "70%",
        // height: "10rem",
        boxShadow: `${idx % 2 === 0 ? "2px 2px 6px 0px" : "-2px 2px 6px 0px"} ${
          colorCodeList[idx % 3].color
        }`,
        borderRadius: "16px",
        flexDirection: `${idx % 2 === 0 ? "row" : "row-reverse"}`,
        justifySelf: "flex-end",
        marginBottom: "1rem",
        position: "relative",
        marginLeft: `${idx % 2 === 0 ? "0px" : "29%"}`,
      }}
    >
      <div
        style={style}
        // className={idx % 2 === 0 ? "evenImage" : "oddImage"}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          padding: "1rem",
          width: "85%",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {data.title}
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "200",
          }}
        >
          {data.des}
        </div>
      </div>
    </Box>
  );
};

export default FeatureContainerHelper;
