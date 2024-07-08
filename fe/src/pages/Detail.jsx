import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/Detail.scss";

function Detail() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/turbolar/" + id);
    const data = await res.json();
    setProducts(data);
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.detailImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.detailImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="detail_container">
        <div className="cars_and_payment">
          <div className="cars_card_detail">
            <div className="slider">
              {products.detailImages && (
                <div className="slider-content">
                  <button onClick={prevSlide} className="prev-btn">
                    &#10094;
                  </button>
                  <img
                    src={products.detailImages[currentSlide]}
                    alt={`Product ${currentSlide}`}
                    className="slider-image"
                  />
                  <button onClick={nextSlide} className="next-btn">
                    &#10095;
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* <div className="odeme_detail_container">
          <div className="detail_price_container">
            <p className="detail_price">
              {products.price} <span className="detail_pricee">USD</span>{" "}
              <p className="detail_pric">≈ {products.price * 1.7} AZN</p>
            </p>
          </div>
          <div className="alt_xett_detail"></div>
          <div className="admin_info_container">
            <div className="info">
              <p className="admin_info">{products.admin}</p>
              <p className="city_info">{products.city}</p>
            </div>
            <div className="user_icon">
              <i className="fa-solid fa-user-tie"></i>
            </div>
          </div>
          <div className="btn_s">
            <button className="payment_btn">
              {" "}
              <Link to={"/payment"}><i className="fa-solid fa-cart-shopping"></i> Add to card</Link>
            </button>

            <button className="nomre_btn">
              {" "}
              <Link to={"/payment"}>
                <div className="nomre_container">
                  <p className="nomreni_goster">Show the number</p>
                  <p>
                    <i className="fa-solid fa-phone"></i> (050) 596 60 76
                  </p>
                </div>
              </Link>
            </button>
          </div>
        </div> */}

          <div className="odeme_2_container">
            <h2>{products.marka} {products.model}</h2>

            <p>Price (Net):  <span>{products.price} $</span></p>
            <p>Mileage:  <span>{products.km}</span></p>
            <p>Location: <span>{products.city}</span></p>
            <p>First Registration: <span>{products.il}</span></p>
            <p>Engine: <span>{products.motor}</span></p>
            <p  className="desc_productss">Description: <span>{products.desc}</span></p>

            <button className="payment_btn">
              {" "}
              <Link to={"/payment"}><i className="fa-solid fa-cart-shopping"></i> Add to card</Link>
            </button>
          </div>
        </div>

        <div className="desc_auto_detail">
          {/* <div className="desc_without_api">
     <p>Şəhər </p>
     <p>Marka </p>
     <p>Model </p>
     <p>Buraxılış ili </p>
     <p>Mühərrik </p>
     <p>Yürüş </p>
     <p>Haqqinda </p>
</div> */}
          {/* <div className="desc_with_api">
<p>{products.city}</p>
<p>{products.marka}</p>
<p>{products.model}</p>
<p>{products.il}</p>
<p>{products.motor}</p>
<p>{products.km}</p>
<p>{products.desc}</p>
</div> */}
        </div>

        <div className="detail_desc_icons_container">
          <div className="detail_card_with_icon">
            <i className="fa-solid fa-dharmachakra"></i>
            <p className="zemanet">12-month warranty</p>
            <p className="texniki_xidmet">
              Our products come with a 12-month warranty for your peace of mind.
            </p>
          </div>

          <div className="detail_card_with_icon">
            <i className="fa-solid fa-plus"></i>
            <p className="zemanet">Warranty extension - CHF 250</p>
            <p className="texniki_xidmet">
              Extend your warranty for an additional year for just CHF 250.
            </p>
          </div>

          <div className="detail_card_with_icon">
            <i className="fa-solid fa-truck"></i>
            <p className="zemanet">Home delivery or pickup</p>
            <p className="texniki_xidmet">
              Choose between home delivery or convenient in-store pickup.
            </p>
          </div>

          <div className="detail_card_with_icon">
            <i className="fa-solid fa-coins"></i>
            <p className="zemanet">12-month warranCash payment or leasing ty</p>
            <p className="texniki_xidmet">
              We offer flexible payment options including cash and leasing.
            </p>
          </div>

          <div className="detail_card_with_icon2">
            <i className="fa-solid fa-left-long"></i>
            <p className="zemanet">14-day money-back guarantee</p>
            <p className="texniki_xidmet">
              Enjoy a 14-day money-back guarantee if you are not satisfied with
              your purchase.
            </p>
          </div>
        </div>

        <div className="detail_footer_container">
          <h2>Buy this car today</h2>
          <p>
            Take a step closer to your dream car. Discover the opportunities
            awaiting you on CarHaven.az!
          </p>
          <button className="payment_btn">
            {" "}
            <Link to={"/payment"}>
              <i className="fa-solid fa-cart-shopping"></i> Add to card
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Detail;
