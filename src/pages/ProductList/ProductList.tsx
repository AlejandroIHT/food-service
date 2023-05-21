import Product from "../../components/Product";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      <Product
        name="Product 1"
        price={10}
        type="Type 1"
        img="https://picsum.photos/200"
        buttonText="Add to cart"
        onAddToCart={() => {}}
      />
    </div>
  );
};

export default ProductList;
