import { Link } from "react-router-dom";
import "../layout/Navbar.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const [isNavbarExits, setisNavbarExits] = useState(false);

  function HamburgerIsExits() {
    setisNavbarExits(!isNavbarExits);
  }

  const { token, decoded, logOut } = useContext(AuthContext);

  return (
    <div className="navbar_container">
      <div className="up_side_navbar">
        {/* <p>
          Destek: <span className="telefon">(050) - 596 - 60 - 76</span>
        </p> */}
        <Link to={"/yardim"} className="yardim">
          Help
        </Link>

        {token ? <Link to={"/wishList"} className="wishlist">
          <i className="fa-solid fa-heart"></i> WishList
        </Link>:null}
        {decoded && decoded.role === "admin" ? (
          <Link to={"/admin"} className="wishlist">
            AdminPage
          </Link>
        ) : null}

        {token ? (
          <>
            <li>
              <Link to={"/profile"} className="wishlist">
                ProfilePage
              </Link>
            </li>
            <li className="log_out_container">
              <div>{decoded.email}</div>
              <button onClick={logOut}>
                <i className="fa-solid fa-right-from-bracket"></i>Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <Link to={"/register"} className="giris">
              <i className="fa-solid fa-user"></i> Register
            </Link>
            <Link to={"/login"} className="giris">
              <i className="fa-solid fa-user"></i> Log In
            </Link>
          </>
        )}
      </div>
      <div className="navbar_list_container">
        <h2 className="carhaven_h2">CarHaven</h2>
        <i
          className={`fa-solid ${isNavbarExits ? "fa-times" : "fa-bars"} ${isNavbarExits ? "active" : ""}`}
          onClick={HamburgerIsExits}
        ></i>
        <div className={`navbar_list ${isNavbarExits ? "active" : ""}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/all"}>All Advertisement</Link>
          <Link to={"/moto"}>Moto</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>

          {token ? (
            <Link to={"/new"}>
              <button className="new_btn">
                <i className="fa-solid fa-plus"></i> New
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
