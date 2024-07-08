import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ButunElanlar from "./pages/ButunElanlar";
import Contact from "./pages/Contact";
import Moto from "./pages/Moto";
import About from "./pages/About";
import YeniElan from "./pages/YeniElan";
import Register from "./pages/Register";
import WishListProvider from "./context/WishListProvider";
import WishList from "./pages/WishListPage";
import Yardim from "./pages/Yardim";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";
import ProductCard from "./pages/ProductCard";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>

    <WishListProvider>
     <BrowserRouter>
     <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/all" element={<ButunElanlar />} />
            <Route path="/moto" element={<Moto />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishList" element={< WishList />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<YeniElan />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/yardim" element={<Yardim />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/payment" element={<Payment />} />

            {/* <Route element={<PrivateRoute role={["user","admin"]}/>}>
            </Route> */}

            <Route element={<PrivateRoute role={["admin"]}/>}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
            </Route>

            <Route path="/products" element={<ProductCard />} />
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
     </WishListProvider>
    
    </>
  );
}

export default App;
