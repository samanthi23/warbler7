// bring in express

const express = require("express");
const router = express.Router();

// bring in a function called sign up
// destructuring 
const { signup } = require("../handlers/auth");

// if there is a request to /signup run the signup function
router.post("/signup", signup);

// this routes file is very clean
// if I want other functions here no problem because clean
module.exports = router;
