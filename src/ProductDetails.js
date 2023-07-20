import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreProvider";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const { items } = useContext(StoreContext);
  const navigate = useNavigate();

  const product = items.find((item) => item.id === parseInt(productId));

  const handleGoBack = () => {
    navigate("/");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = product;

  return (
    <div className="product-details--general">
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Discount Percentage: {discountPercentage}%</p>
      {images && (
        <div>
          <p>Images:</p>
          {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Stock: {stock}</p>
      <p>Title: {title}</p>
      <button className="product-details--button" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default ProductDetails;
