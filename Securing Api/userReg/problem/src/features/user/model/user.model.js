// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
// export const addUser = (data) => {
//   // Write your code here

//   const data = new UserSchema(id,name,email,password);

//   addUser.push(data);

// return data;;



// };

export const addUser = (data) => {
  const { name, email, password } = data;
  const newUser = new UserSchema(name, email, password);
  users.push(newUser);
  return newUser;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });
// addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

// export const confirmLogin = (data) => {
//   // Write your code here

//   const addUser =addUser.find((u) =>

//   u.email == email && u.password == password

//   )
//   return addUser
// };


export const confirmLogin = (data) => {
  const { email, password } = data;
  let isValid = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) isValid = true;
  });
  return isValid;
};



export const getAllUsers = () => {
  return users;
};
