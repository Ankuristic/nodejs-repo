import express from "express";
import {
    getTweets,
    createTweet,
  } from "./tweet.controller.js";

// import TweetController from "./tweet.controller"

const router = express.Router()

// const tweetController = new TweetController();

router.get("/", getTweets);

router.post("/", createTweet);

export default router;