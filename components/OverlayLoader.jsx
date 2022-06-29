import Loader from "./Loader";

const OverlayLoader = ({ children }) => {
  return (
    <div className="overlay-loader">
      {children ? (
        <div className="loader-placeholder">{children}</div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OverlayLoader;
