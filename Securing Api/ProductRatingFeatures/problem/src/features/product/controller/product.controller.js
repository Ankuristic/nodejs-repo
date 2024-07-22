// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  console.log(req.query);

  const userID =req.query.userID;
  const productID= req.query.productID;
  const rating = req.query.rating;
  const error = ProductModel.rateProduct(
    userID,
    productID,rating
  );
  if(error) {
    return res.status(400).send(error);
  }else {
    return res.status(200).send("rating been added");
  }
};
