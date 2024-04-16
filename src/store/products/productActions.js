import { apiCallBegan } from "../api";
import {
  productsAdded,
  productsReceived,
  productsRequestFailed,
  productsRequested,
  productsUpdated,
  productsDeleted,
} from "./productSlice";

const url = "/products";

export const loadProducts = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const addProduct = (product) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      method: "POST",
      data: product,
      onSuccess: productsAdded.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const updateProduct = (product) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url: `${url}/${product.id}`,
      method: "PUT",
      data: product,
      onSuccess: productsUpdated.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const deleteProduct = (product) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url: `${url}/${product.id}`,
      method: "DELETE",
      data: product,
      onSuccess: productsDeleted.type,
      onError: productsRequestFailed.type,
    })
  );
};
