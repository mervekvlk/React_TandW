import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchProductsByCategory, fetchProductsBySubcategory } from '/src/slices/productSlice.jsx';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { addToCart } from '../../slices/cartSlice';

function ShopList() {

  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  const products = useSelector((state) => state.products.products); 
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error); 

  useEffect(() => {
    const params = queryString.parse(location.search);
    setSelectedCategoryId(params.categoryId || null);
    setSelectedSubcategoryId(params.subcategoryId || null);
  }, [location.search]);

  useEffect(() => {
    if (productStatus === 'idle') {
      if (selectedCategoryId) {
        dispatch(fetchProductsByCategory(selectedCategoryId));
      } else if (selectedSubcategoryId) {
        dispatch(fetchProductsBySubcategory(selectedSubcategoryId));
      } else {
        dispatch(fetchProducts());
      }
    }
  }, [productStatus, dispatch, selectedCategoryId, selectedSubcategoryId]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='row'>
      {/*single product*/}
      
        {productStatus === "loading" && <div>Loading...</div>}
        {productStatus === "succeeded" &&
          products.map((product) => (
            <div className="col-sm-6 col-md-4 " key={product.id}>
            <div className="sin-product" >
              <div className="product-top">
                <div className="pro-img">
                  <a href="#">
                    <img src={product.photos[0]} alt={product.name} />
                  </a>
                </div>
                
                <div className="name">
                  <a href="#">{product.name}</a>
                </div>

                <div className="price">
                  <span className="price-new">${product.price}</span>
                </div>
                <div className="button-group1">
                  <button
                    title="Add to Wish List"
                    data-bs-toggle="tooltip"
                    type="button"
                    className="btn-wishlist"
                  >
                    <i className="fa fa-heart" />
                  </button>
                  <button
                    title="Compare this Product"
                    data-bs-toggle="tooltip"
                    type="button"
                    className="btn-compare"
                  >
                    <i className="fa fa-exchange" />
                  </button>
                </div>
                <div className="pro-bottom">
                  <button onClick={() => handleAddToCart(product)} type="button" className="btn-add-card">
                    <i className="fa fa-shopping-cart" />{" "}
                    <span>Add to Cart</span>
                  </button>
                  <button
                    type="button"
                    className="btn-quickview"
                    data-bs-target="#productModal"
                    data-bs-toggle="modal"
                  >
                    <i className="fa fa-search-plus" />
                    Quick View
                  </button>
                </div>
              </div>
            </div>
            </div>
          ))}
        {productStatus === "failed" && <div>Error: {error}</div>}
      </div>
    
  );
}

export default ShopList;
