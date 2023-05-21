import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import ProductList from "../../pages/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        {/* TODO: Create Checkout component */}
        {/*<Route path="checkout" element={<h1>Checkout</h1>} />*/}
      </Route>
    </Routes>
  );
};

export default MainRoutes;
