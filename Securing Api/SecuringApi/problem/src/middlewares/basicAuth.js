// Please don't change the pre-written code
// Import the necessary modules here

import UserModel from "../features/user/user.model"

const basicAuthMiddleware = (req,res,next) => {
  // Write your code here

  const authHeader = req.headers("authorization");
  console.log(authHeader);

  if(!authHeader){
    return res.status(401).send("No authorization  details found")
  }
};


// 2. Extract Credentials. [basic qwertyusdfgjkll5567889vdfgh]

const base64Credntials = authHeader.replace('Basic','')
console.log(base64Credntials);

// 3. decode credentials 

 const decodeCreds = buffer.from(base64Credntials, 'base64').toString('utf8');
 console.log(decodeCreds);
 const creds = decodeCreds.split(':');
 console.log(creds);

 const user = UserModel.getAll().find(u => u.email == creds[0] && u.password== creds[1])
 console.log(user);

 if(user) {
  next();
 }

 else {
  return res.status(401).send("Incorrect credentials")
 }



export default basicAuthMiddleware;
