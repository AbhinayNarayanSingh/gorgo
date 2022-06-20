import Moment from "moment";

const PostCardType2 = ({ n }) => {
  const blankImgae =
    "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6";
  return (
    <div className="post-card-type-2">
      <div className="row">
        <div className="col-md-3">
          <img src={n.urlToImage || blankImgae} alt="" />
        </div>

        <div className="col-md-9">
          <a href="/">
            <h2>{n.title.slice(0, 75).trim()}...</h2>
          </a>

          <h5>
            <span>
              {n.author ? n.author : "Unknown"} <span></span>{" "}
              {Moment(n.publishedAt).format("LL")}
            </span>
          </h5>
          <p>{n.description.slice(0, 200)}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCardType2;
