const ImageFullScreenPopup = ({ url, setToggel }) => {
  return (
    <div className="ImageFullScreenPopup">
      <div className="image-container">
        <img src={url} alt="full screen image" />
        <i className="fa-solid fa-xmark" onClick={() => setToggel(false)}></i>
      </div>
    </div>
  );
};

export default ImageFullScreenPopup;
