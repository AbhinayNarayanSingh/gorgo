import Moment from "moment";

const PopularPostSideBar = ({ hero }) => {
  return (
    <>
      {hero.map((n, index) => {
        return (
          <div className="post-card-type-3 row" key={index}>
            <div className="col-3">
              <img src={n.urlToImage} alt={"Error 404"} />
            </div>
            <div className="col-9">
              <a href="/">
                <h2>{`#${index + 1} ${n.title.trim().slice(0, 50)}...`}</h2>
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
