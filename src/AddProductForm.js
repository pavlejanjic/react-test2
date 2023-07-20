import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreProvider";
import "./AddProductForm.css";

const AddProductForm = () => {
  const { addProduct } = useContext(StoreContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price,
      brand,
      category,
      description,
      discountPercentage,
      rating,
      stock,
    };

    addProduct(newProduct);
    navigate("/");
  };

  return (
    <form className="form-general" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Brand:</label>
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <label>Category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Discount Percentage:</label>
      <input
        type="text"
        value={discountPercentage}
        onChange={(e) => setDiscountPercentage(e.target.value)}
      />
      <label>Rating:</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <label>Stock:</label>
      <input
        type="text"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
