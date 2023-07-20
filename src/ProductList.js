import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "./StoreProvider";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = () => {
  const { items } = useContext(StoreContext);
  const [visibleItems, setVisibleItems] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 9);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderedItems = items
    .slice(0, visibleItems)
    .map((item) => <ProductItem key={item.id} product={item} />);

  return (
    <div>
      <div className="product-list--general">
        {renderedItems.length > 0 ? (
          renderedItems
        ) : (
          <div>No products found</div>
        )}
      </div>
      {visibleItems < items.length && (
        <button className="product-list--button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;
