// import express from "express";
// // import {
// //   getTweets,
// //   createTweet,
// // } from "./src/features/tweet/tweet.controller.js";
// const app = express();

// import  * as TweetRouter from  "./src/features/tweet/tweet.routes"

// // TODO: Refactor these route handlers into a separate routes file using express Router

// app.use("/api/tweets", TweetRouter);


// app.listen(5000, () => {
//   console.log("server is listening at port 5000");
// });



import express from "express";
import tweetRoutes from "./src/features/tweet/tweet.routes.js";
const app = express();

app.use("/api/tweets", tweetRoutes);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});