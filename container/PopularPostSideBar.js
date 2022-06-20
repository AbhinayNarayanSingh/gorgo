import Moment from "moment";

const PopularPostSideBar = ({ hero }) => {
  const blankImgae =
    "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6";
  return (
    <>
      {hero.map((n, index) => {
        return (
          <div className="post-card-type-3 row" key={index}>
            <div className="col-3">
              <img src={n.urlToImage || blankImgae} alt={"Error 404"} />
            </div>
            <div className="col-9">
              <a href="/">
                <h2>{`#${index + 1} ${n.title.trim().slice(0, 60)}...`}</h2>
              </a>
              <h5>
                {" "}
                {n.author ? n.author : "Unknown"} |{" "}
                {Moment(n.publishedAt).format("LL")}
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PopularPostSideBar;
