import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreProvider";
import "./EditProductForm.css";

const EditProductForm = () => {
  const { id } = useParams();

  const { items, updateProduct } = useContext(StoreContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const productId = parseInt(id);
    const product = items.find((item) => item.id === productId);
    if (product) {
      setFormData({ ...product });
    }
  }, [id, items]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData) {
      const updatedProduct = { ...formData };

      fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          updateProduct(updatedProduct);
          navigate("/");
        });
    }
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  const {
    title,
    price,
    description,
    stock,
    rating,
    discountPercentage,
    category,
    brand,
  } = formData;

  return (
    <div className="edit-product-form--general">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            className="edit-product-form--textarea"
            name="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Discount Percentage:</label>
          <input
            type="number"
            name="discountPercentage"
            value={discountPercentage}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;
