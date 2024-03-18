import { setItems, showAll } from "./category.js";
import store from "./index.js";
import { fetchProducts } from "./products";

// Dispatch fetchProducts action to fetch products
store.dispatch(fetchProducts())
  .then(({ payload }) => {
    // Once products are fetched, dispatch setItems action to set products in category
    store.dispatch(setItems(payload));
    store.dispatch(showAll());
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });