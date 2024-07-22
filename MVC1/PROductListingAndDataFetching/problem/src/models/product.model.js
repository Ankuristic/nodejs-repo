// Importing the 'products' array from the specified file path
import { products } from "../assets/products.js";

// Exporting the ProductModel class
export default class ProductModel {
  // Method to fetch products
  fetchProducts = () => {
    // Returning the 'products' array as the result of the fetch operation
    return products;
  };
}
