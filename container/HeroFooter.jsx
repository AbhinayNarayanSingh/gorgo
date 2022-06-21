import Link from "next/link";

const HeroFooter = ({ h2, span, link = "/" }) => {
  return (
    <div
      className="section-5 container-fluid"
      style={{ borderTop: ".5px solid grey" }}
    >
      <div className="container">
        <h2>
          {h2} <span>{span}</span>.
        </h2>
        <Link href={link}>
          <button>Get started</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroFooter;
