import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      // Adding a timeout before making the API request
      await new Promise((resolve) => setTimeout(resolve, 5000 || 0));

      const response = await axios.request({
        baseURL: "https://fakestoreapi.com",
        url,
        method,
        data,
      });

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
