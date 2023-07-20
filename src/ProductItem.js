import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./StoreProvider";
import "./ProductItem.css";

const ProductItem = ({ key, product }) => {
  const { deleteProduct } = useContext(StoreContext);

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  return (
    <div className="product-item--general" key={key}>
      {product.thumbnail && (
        <img
          className="product-item--img"
          src={product.thumbnail}
          alt={product.title}
        />
      )}

      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>

      <div className="product-item--buttons">
        <button>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </button>
        <button>
          <Link to={`/product/edit/${product.id}`}>Edit Product</Link>
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
