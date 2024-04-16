import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: "",
  },

  reducers: {
    productsRequested: (state, action) => {
      state.loading = true;
    },

    productsAdded: (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
    },

    productsUpdated: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;
      state.loading = false;
    },

    productsDeleted: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products.splice(index, 1);
      state.loading = false;
    },

    productsReceived: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },

    productsRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;

export const {
  productsRequested,
  productsReceived,
  productsAdded,
  productsRequestFailed,
  productsUpdated,
  productsDeleted,
} = productSlice.actions;
