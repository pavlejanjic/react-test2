import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, []);

  const addProduct = (product) => {
    setItems([...items, product]);
  };

  const updateProduct = (updatedProduct) => {
    const updatedItems = items.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    );
    setItems(updatedItems);
  };

  const deleteProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.id);
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      });
  };

  return (
    <StoreContext.Provider
      value={{
        items,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
