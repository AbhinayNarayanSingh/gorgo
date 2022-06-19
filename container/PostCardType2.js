import Moment from "moment";

const PostCardType2 = ({ n }) => {
  return (
    <div className="post-card-type-2">
      <div className="row">
        <div className="col-md-3">
          <img src={n.urlToImage} alt="" />
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
