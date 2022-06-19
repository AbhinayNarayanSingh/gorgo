import Moment from "moment";

const PostCardType1 = ({ n }) => {
  const blankImgae =
    "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6";
  return (
    <div className="col-md-6" >
      <div className="card post-card-type-1">
        <div className="image-top">
          <img src={n.urlToImage || blankImgae} alt={n.title} />
        </div>
        <div className="card-body">
          <h2>{n.title.slice(0, 55).trim()}...</h2>
          <p>{n.description.slice(0, 100)}</p>
          <h5>
            <span>
              {n.author ? n.author : "Unknown"} <span></span>{" "}
              {Moment(n.publishedAt).format("LL")}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PostCardType1;
