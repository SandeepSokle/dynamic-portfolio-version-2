import "./HomeInfo.css";
import imagePortfolio from "../../images/portfolio.png";
import imageBlog from "../../images/blogs.jpg";
import Cards from "./Cards";
import { Grid } from "@mui/material";
let arr = [1, 2, 3, 4, 5, 6];
const cardListData = [
  {
    label: "Portfolio",
    imgUrl: imagePortfolio,
  },
  {
    label: "Blogs",
    imgUrl: imageBlog,
  },
  {
    label: "Portfolio",
    imgUrl:
      "https://source.unsplash.com/1600x900/?book=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Portfolio",
    imgUrl:
      "https://source.unsplash.com/1600x900/?book=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Portfolio",
    imgUrl:
      "https://source.unsplash.com/1600x900/?book=format&fit=crop&w=1400&h=1250&q=60",
  },
  {
    label: "Portfolio",
    imgUrl:
      "https://source.unsplash.com/1600x900/?book=format&fit=crop&w=1400&h=1250&q=60",
  },
];
const HomeInfo = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="background-img-main-container">
        <div className="section-title-container">
          <div class="section-title">Share Your Inspirations</div>
        </div>
      </div>
      <div className="Boxes-container">
        {cardListData.map((data, idx) => {
          return <Cards data={data} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default HomeInfo;
