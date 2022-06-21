import Moment from "moment";

const HeroCardSlider = ({ n, currentSlide, index }) => {
  return (
    <div
      className={`hero-slider ${
        currentSlide === index ? "active" : "non-active"
      }`}
    >
      <div className="img-container">
        <img src={n.urlToImage} alt="" />
      </div>

      <div className="hero-text">
        <p>
          {n.author ? n.author : "Unknown"} <span></span>{" "}
          {Moment(n.publishedAt).format("LL")}
        </p>
        <h2>{n.title && n.title}</h2>
      </div>
    </div>
  );
};

export default HeroCardSlider;
