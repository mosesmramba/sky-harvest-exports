import React from 'react';
import '../App.css'; // or Products.css

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <h1 className="products-title">Our Products</h1>

        {/* Fruits Row */}
        <div className="product-category">
          <h2 className="category-title">Fruits</h2>
          <div className="product-row">
            <div className="product-item">Avocados</div>
            <div className="product-item">Mangoes</div>
            <div className="product-item">Passion Fruits</div>
          </div>
        </div>

        {/* Vegetables Row */}
        <div className="product-category">
          <h2 className="category-title">Vegetables</h2>
          <div className="product-row">
            <div className="product-item">French Beans</div>
            <div className="product-item">Green Bananas</div>
            <div className="product-item">Spices & Herbs</div>
            <div className="product-item">Sweet Potatoes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
