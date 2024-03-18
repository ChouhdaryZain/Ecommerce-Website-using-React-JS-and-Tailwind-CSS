import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products";
import categorySlice from "./category";
import './init'


const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    category: categorySlice.reducer,
  },
});

export default store;