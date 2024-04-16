import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  loadProducts,
  updateProduct,
} from "../store/products/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const addNewProduct = () => {
    dispatch(
      addProduct({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
    );
  };

  const updateExistingProduct = () => {
    dispatch(
      updateProduct({
        id: 18,
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
    );
  };

  const deleteExistingProduct = () => {
    dispatch(
      deleteProduct({
        id: 1,
      })
    );
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Products</h1>
          {error ? (
            <p>{error}</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          )}

          <button
            style={{ backgroundColor: "green" }}
            onClick={() => addNewProduct()}
          >
            Add product
          </button>
          <br />
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => deleteExistingProduct()}
          >
            Delete product
          </button>
          <br />
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => updateExistingProduct()}
          >
            Update product
          </button>
        </>
      )}
    </div>
  );
};

export default Products;
