import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import reducer from "./products/productSlice";

export default function store() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],
  });
}
