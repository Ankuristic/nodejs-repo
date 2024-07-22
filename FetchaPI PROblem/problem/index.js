// Please do not change the prewritten code

// import axios from 'axios';
const axios = require ('axios')

const Solution = async () => {
  // Write your code here

axios.get('https://api.codingninjas.com/api/v3/event_tags')
.then(response =>{
  console.log(response.data);
  return(response.data)
})

.catch(err=>{
  console.log(err);
  return (err)
})

};
Solution();
module.exports = Solution;
