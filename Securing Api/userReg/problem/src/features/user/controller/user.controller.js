// // Please don't change the pre-written code
// // Import the necessary modules here
// import UserModel from "user.model";
// import { addUser, confirmLogin } from "../model/user.model";


// export const registerUser = (req, res, next) => {
//   const { name, email, password,id}= req.body

//   UserModel.addUser(name,email,password,id);
//   res.send(201).send(addUser)

//   // const result = UserModel.confirmLogin(
//   //   req.body.email,
//   //   req.body.password
//   // )

//   // if(!result){
//   //   return res.status(400).send('incorrect credentials')
//   // } else {
//   //   return res.send('login successful')
//   // }



// };

// export const loginUser = (req, res) => {
//   // Write your code here
//   const {email, password}=req.body
//   UserModel.confirmLogin(email,password);
//   res.send(200).send(confirmLogin)
// };


import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).json({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    res.status(200).json({ status: "success", msg: "login successful" });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
}