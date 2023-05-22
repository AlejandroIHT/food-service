import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import ProductList from "../../pages/ProductList";
import Checkout from "../../pages/Checkout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
