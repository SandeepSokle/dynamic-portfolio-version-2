import "./HomeInfo.css";
import Boxes from "./Boxes";
let arr = [1, 2, 3, 4, 5, 6];
const HomeInfo = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="background-img-main-container">
        <div className="section-title-container">
          <div class="section-title">Share Your Inspirations</div>
        </div>
      </div>
      <div className="Boxes-container">
        {arr.length > 0
          ? arr.map(() => {
              return <Boxes />;
            })
          : null}
      </div>
    </div>
  );
};

export default HomeInfo;
