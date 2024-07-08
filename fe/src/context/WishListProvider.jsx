import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setwishList] = useLocalStorage("wishList",[]);

  function addwishList(item) {
    const index = wishList.findIndex((x) => x._id === item._id);

    if (index !== -1) {
      
      setwishList([...wishList.filter(x=>x._id !== item._id)]);
    } else {
      setwishList([...wishList, { ...item }]);
    }
  }

  function isExitsWishList(item) {
    return wishList.find(x=>x._id === item._id)
  }
  return (
    <WishListContext.Provider value={{ wishList, addwishList,isExitsWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;