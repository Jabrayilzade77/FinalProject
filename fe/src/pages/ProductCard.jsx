import "../pages/ProductCard.scss";
const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="card-header">
        <h2>NIKE AIR MAX 1</h2>
        <div className="favorite-icon"></div>
      </div>
      <div className="card-image">
        <img
          src="https://img.lovepik.com/photo/48007/1949.jpg_wh860.jpg"
          alt="Nike Air Max 1"
        />
      </div>
      <div className="card-footer">
        <p>$256 USD</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
