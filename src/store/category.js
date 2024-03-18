import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    selectedCategory: 'all',
    sortOption: '',
    filteredItems: [],
    items: [], // You need to have items in your initial state to reference them in reducers
  },
  reducers: {
    setItems(state, action) {
      // Action to set the items from fetched products
      state.items = [...action.payload];
    },
    // Action to filter products by category
    filterItems(state, action) {
      const category = action.payload;
      // Make sure 'items' is part of the state and populated with the product items
      state.filteredItems = category === '' ? [...state.items] : state.items.filter((item) => item.category === category);
      state.selectedCategory = category;
    },
    // Action to reset filters and show all products
    showAll(state) {
      state.filteredItems = [...state.items];
      state.selectedCategory = 'all';
    },
    // Action to sort products
    sortItems(state, action) {
      const option = action.payload;
      let sortedItems = [...state.filteredItems]; // Changed 'this' to 'state'
      switch (option) {
        case "A-Z":
          sortedItems.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Z-A":
          sortedItems.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "low-to-high":
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        case "high-to-low":
          sortedItems.sort((a, b) => b.price - a.price);
          break;
        default:
          // If no sorting option is provided or it's 'filter', do not sort
          break;
      }
      state.filteredItems = sortedItems;
      state.sortOption = option;
    },
  },
});

export const { setItems, filterItems, showAll, sortItems } = categorySlice.actions;
export default categorySlice;
