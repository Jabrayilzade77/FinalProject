import { useContext, useEffect, useState } from "react";
import "../pages/Moto.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../context/WishListProvider";
import { Helmet } from "react-helmet";

function Moto() {
  const [turbos, setTurbos] = useState([]);
  const [filteredTurbos, setFilteredTurbos] = useState([]);
  const [marka, setMarka] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [il, setIl] = useState("");

  const { addwishList, isExitsWishList } = useContext(WishListContext);
  const brands = ["", "BMW", "Mercedes", "Audi","Moto","Porsche","Range Rover","Jeep"];
  const models = {
    BMW: ["", "X5", "X6", "3 Series", "5 Series"],
    Mercedes: ["", "C Class", "E Class", "S Class", "GLA"],
    Audi: ["", "A3", "A4", "Q5", "Q7"],
    Moto:["","Aprilia","Ducati","Suzuki","Tufan"],
    Porsche:["","Cayenne","Macan","Panamera","Taycan"],
    RangeRover:["","Defender","Discovery","RR Sport","RR Evoque"],
    Jeep:["","Wrangler","Gladiator","Cherokee"]
  };

  useEffect(() => {
    getAllTurbo();
  }, []);

  useEffect(() => {
    filterTurbos();
  }, [turbos, marka, selectedModel, minPrice, maxPrice, il]);

  async function getAllTurbo() {
    const res = await fetch("http://localhost:3000/turbolar/");
    const data = await res.json();
    setTurbos(data);
  }



  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  function filterTurbos() {
    let filtered = turbos;
    if (marka) {
      filtered = filtered.filter(
        (car) => car.marka.toLowerCase() === marka.toLowerCase()
      );
    }
    if (selectedModel) {
      filtered = filtered.filter(
        (car) => car.model.toLowerCase() === selectedModel.toLowerCase()
      );
    }
    if (minPrice || maxPrice !== Infinity) {
      filtered = filtered.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
    }
    if (il) {
      filtered = filtered.filter((car) => car.il === parseInt(il));
    }
    setFilteredTurbos(filtered);
  }

  const handleFilterButtonClick = () => {
    filterTurbos();
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Moto</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <main>
        <section className="main_container">
        <div className="filter_container">
              <p className="find_for_you">Find The Right Vehicle For You</p>
              <div className="filter_group">
                <select value={marka} onChange={(e) => setMarka(e.target.value)}>
                  {brands.map((marka) => (
                    <option key={marka} value={marka}>
                      {marka ? marka : "Any Make"}
                    </option>
                  ))}
                </select>
              </div>
              {marka && (
                <div className="filter_group">
                  <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                    {models[marka].map((model) => (
                      <option key={model} value={model}>
                        {model ? model : "Any Model"}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="filter_group">
                <div className="qiymet_inputu">
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="filter_group">
                <input
                  type="number"
                  placeholder="Year"
                  value={il}
                  onChange={(e) => setIl(e.target.value)}
                />
              </div>

              <button onClick={handleFilterButtonClick} className="search_btn">
                Search Now <i className="fa-solid fa-angle-right"></i>
              </button>

              
          


            </div>

            <div style={{width:"100%"}}>
            <p className="for_sale">Featured Cars For Sale</p>
            <div className="dashed_border_div"></div>
            </div>

          <div className="cars_container">

            
            <h2 className="elan_h1">Premium Elanlar</h2>
            <div className="premium_cars">
              {filteredTurbos.map((x) =>
                x.marka === "Moto" && x.title === "premium elan" ? (
                  <div className="product-card" key={x._id}>
                  <div className="icons_container">
                    <div className="loading_div">
                      <img src="src/imgs/sync (1).png" alt="" className="loading_icon"/>
                    </div>
                    <div className="faiz_div">
                      <p className="faiz_icon">%</p>
                      </div>
                  <div
                    onClick={() => addwishList(x)}
                    className="favorite-icon"
                  >
                    {isExitsWishList(x) ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                    
                  </div>
                  <div className="crown_diamond_div">
                  <i className="fa-solid fa-crown"></i>
                  <i className="fa-solid fa-gem"></i>
                  </div>
                  </div>
              <img src={x.image} alt={x.title} className="product-image" />
                
              <Link to={"/detail/" + x._id} className="detail-link">
              <div className="marka_model_price">
                <p className="product-price">{x.price} $</p>
               <div className="marka_model_div">
               <p className="product-marka">{x.marka}</p>
               <p className="product-marka">{x.model}</p>
               </div>
               <div className="il_motor_km">
                <p className="product-marka">{x.il},</p>
                <p className="product-marka">{x.motor},</p>
                <p className="product-marka">{x.km} km</p>
               </div>
               <p className="product-date">{formatDate(x.createdAt)}</p>
               </div>
                </Link>
              
               
               
            </div>
                ) : (
                  ""
                )
              )}
            </div>

            <h2 className="elan_h1">Vip Elanlar</h2>
            <div className="vip_cars">
              {filteredTurbos.map((x) =>
                x.marka === "Moto" && x.title === "vip elan" ? (
                  <div className="product-card" key={x._id}>
                  <div className="icons_container">
                    <div className="loading_div">
                      <img src="src/imgs/sync (1).png" alt="" className="loading_icon"/>
                    </div>
                    <div className="faiz_div">
                      <p className="faiz_icon">%</p>
                      </div>
                  <div
                    onClick={() => addwishList(x)}
                    className="favorite-icon"
                  >
                    {isExitsWishList(x) ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                    
                  </div>
                  <div className="crown_diamond_div">
                  <i className="fa-solid fa-crown"></i>
                  <i className="fa-solid fa-gem"></i>
                  </div>
                  </div>
              <img src={x.image} alt={x.title} className="product-image" />
                
              <Link to={"/detail/" + x._id} className="detail-link">
              <div className="marka_model_price">
                <p className="product-price">{x.price} $</p>
               <div className="marka_model_div">
               <p className="product-marka">{x.marka}</p>
               <p className="product-marka">{x.model}</p>
               </div>
               <div className="il_motor_km">
                <p className="product-marka">{x.il},</p>
                <p className="product-marka">{x.motor},</p>
                <p className="product-marka">{x.km} km</p>
               </div>
               <p className="product-date">{formatDate(x.createdAt)}</p>
               </div>
                </Link>
              
               
               
            </div>
                ) : (
                  ""
                )
              )}
            </div>

            <h2 className="elan_h1">Adi Elanlar</h2>
            <div className="premium_cars">
              {filteredTurbos.map((x) =>
                x.marka === "Moto" && x.title === "adi elan" ? (
                  <div className="product-card" key={x._id}>
                  <div className="icons_container">
                    <div className="loading_div">
                      <img src="src/imgs/sync (1).png" alt="" className="loading_icon"/>
                    </div>
                    <div className="faiz_div">
                      <p className="faiz_icon">%</p>
                      </div>
                  <div
                    onClick={() => addwishList(x)}
                    className="favorite-icon"
                  >
                    {isExitsWishList(x) ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                    
                  </div>
                  <div className="crown_diamond_div">
                  <i className="fa-solid fa-crown"></i>
                  <i className="fa-solid fa-gem"></i>
                  </div>
                  </div>
              <img src={x.image} alt={x.title} className="product-image" />
                
              <Link to={"/detail/" + x._id} className="detail-link">
              <div className="marka_model_price">
                <p className="product-price">{x.price} $</p>
               <div className="marka_model_div">
               <p className="product-marka">{x.marka}</p>
               <p className="product-marka">{x.model}</p>
               </div>
               <div className="il_motor_km">
                <p className="product-marka">{x.il},</p>
                <p className="product-marka">{x.motor},</p>
                <p className="product-marka">{x.km} km</p>
               </div>
               <p className="product-date">{formatDate(x.createdAt)}</p>
               </div>
                </Link>
              
               
               
            </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Moto;
