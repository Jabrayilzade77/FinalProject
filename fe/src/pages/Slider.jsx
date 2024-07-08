
const Slider = ({ images }) => {
  return (
    <div className="slider">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slider Image ${index}`} />
      ))}
    </div>
  );
}

export default Slider;
