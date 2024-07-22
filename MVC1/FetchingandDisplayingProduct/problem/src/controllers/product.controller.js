// Importing the ProductModel class from the specified file path
import ProductModel from "../models/product.model.js";

// Creating an instance of the ProductModel class
const productModel = new ProductModel();

// Exporting the ProductController class
export default class ProductController {
  // Controller method to handle GET requests for fetching products
  getProducts = (req, res) => {
    // Calling the fetchProducts method from the productModel instance to retrieve products
    let products = productModel.fetchProducts();

    // Sending the retrieved products as the response to the client
    res.send(products);
  };
}

