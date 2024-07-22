// Please don't change the pre-written code
// Import the necessary modules here
import UserModel from "../user/user.moel.js"
let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  //1. validate user and product
 const user = UserModel.getAllUsers().find(
  (u) => u.id ==userId );

  if(!user){
    return 'user not found'
  }

  //validate product

  const product =products.find((p)=>p.id == productID)

  if(!product){
    return 'product not found'
  }

  //check  if there is any ratings 

  if(!product.ratings){
    product.ratings
=[];
products.ratings.push({
  userID: userID,
  rating:rating
  });

} else {
  // check if user rating is already available 

  const existingRatingIndex = product.ratings.findIndex(
    (r)=> r.userID == userID
    );


    if(existingRatingIndex>=0){
      product.ratings[existingRatingIndex]={
        userID:userID,
        rating:rating
      };
    } else {
      // if no existing rating , then add new rating.
      products.ratings.push({
        userID:userID,
        rating:rating
      })
    }
    }
  

}


