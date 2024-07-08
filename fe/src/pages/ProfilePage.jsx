import { useContext, useEffect, useState } from "react";
import "../pages/Profile.scss";
import { WishListContext } from "../context/WishListProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ButunElanlar() {
  const [turbos, setTurbos] = useState([]);
  const [filteredTurbos, setFilteredTurbos] = useState([]);
  const [marka, setmarka] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [il, setil] = useState("");

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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
    console.log(data);
  }

  async function getDeleteProduct(id) {
    const res = await fetch("http://localhost:3000/turbolar/" + id, {
      method: "delete",
    });
    const data = await res.json();

    getAllTurbo();
  }

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
    console.log(filtered);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <main>
        <section className="">
          <div className="filter_container">
            <div className="filter_group">
              <label>Marka:</label>
              <select value={marka} onChange={(e) => setmarka(e.target.value)}>
                {brands.map((marka) => (
                  <option key={marka} value={marka}>
                    {marka ? marka : "Hamisi"}
                  </option>
                ))}
              </select>
            </div>
            {marka && (
              <div className="filter_group">
                <label>Model:</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  {models[marka].map((model) => (
                    <option key={model} value={model}>
                      {model ? model : "Hamisi"}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="filter_group">
              <label>Qiymet Aralığı:</label>
             <div className="qiymet_inputu">
             <input
                type="number"
                placeholder="Min Qiymet"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Qiymet"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
             </div>
            </div>
            <div className="filter_group">
              <label>Il:</label>
              <input
                type="number"
                placeholder="Il"
                value={il}
                onChange={(e) => setil(e.target.value)}
              />
            </div>
          </div>

          <div className="cars_container">
            <h2 className="elan_h1">Premium Elanlar</h2>
            <div className="premium_cars">
              {filteredTurbos.map((x) =>
                x.title === "premium elan" ? (
                  <div className="product-card" key={x._id}>
                  <div className="icons_container">
                    <div className="loading_div">
                      <img src="src/imgs/sync (1).png" alt="" className="loading_icon"/>
                    </div>
                    <div className="faiz_div">
                      <p className="faiz_icon">%</p>
                      </div>
                <div className="delete_and_heart_div">
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
                  <div onClick={()=>getDeleteProduct(x._id)} className="delete_div">
                  <i className="fa-solid fa-trash"></i>
                  </div>
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
                x.title === "vip elan" ? (
                  <div className="product-card" key={x._id}>
                  <div className="icons_container">
                    <div className="loading_div">
                      <img src="src/imgs/sync (1).png" alt="" className="loading_icon"/>
                    </div>
                    <div className="faiz_div">
                      <p className="faiz_icon">%</p>
                      </div>
                <div className="delete_and_heart_div">
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
                  <div onClick={()=>getDeleteProduct(x._id)} className="delete_div">
                  <i className="fa-solid fa-trash"></i>
                  </div>
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
                x.title === "adi elan" ? (
                  <div className="product-card" key={x._id}>
                  <div className="icons_container">
                    <div className="loading_div">
                      <img src="src/imgs/sync (1).png" alt="" className="loading_icon"/>
                    </div>
                    <div className="faiz_div">
                      <p className="faiz_icon">%</p>
                      </div>
                <div className="delete_and_heart_div">
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
                  <div onClick={()=>getDeleteProduct(x._id)} className="delete_div">
                  <i className="fa-solid fa-trash"></i>
                  </div>
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
export default ButunElanlar;
