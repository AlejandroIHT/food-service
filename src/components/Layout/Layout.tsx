import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header";
import { addAllToCartFromLocalStorage } from "../../slices/cartSlice";
import "./Layout.css";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllToCartFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
