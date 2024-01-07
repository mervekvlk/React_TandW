import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slices/productSlice";
import blogReducer from '../slices/blogSlice';
import contactReducer from '../slices/contactSlice';
import categoryReducer from '../slices/categorySlice';
import cartReducer from '../slices/cartSlice';
import clientReducer from '../slices/clientSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    blogs: blogReducer,
    contacts:contactReducer,
    categories:categoryReducer,
    cart: cartReducer,
    clients:clientReducer,
  },
})  