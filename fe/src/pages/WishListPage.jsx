import { useContext } from 'react'
import { WishListContext } from '../context/WishListProvider'
import {Helmet} from "react-helmet";
import "../pages/WishList.scss"
import { Link } from 'react-router-dom';


function WishList() {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const {wishList,isExitsWishList,addwishList} = useContext(WishListContext)
  return (
   <>
   <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>WisList Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>


      <div style={{width:"100%"}}>
            <p className="for_sale">Your Choose Cars</p>
            <div className="dashed_border_div"></div>
            </div>
      <div className="cards_container">
      {wishList.map(x=>(
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
    ))}
      </div>
  
   </>
  )
}

export default WishList