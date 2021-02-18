// first we need our database
// models/index.js
const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next) {};


// another async function, sign up function
exports.signup = async function(req, res, next) {
  try {
    // create a user
    // then create a token (signing a tokon)
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign( // json web token from website
    // {}, payload can be object
    // are the values passed to the jwt token, key-value
    // id: id
      {
        id,
        username,
        profileImageUrl
      },
      // then pass in secret or private key
      process.env.SECRET_KEY
    );
    // return a status of 200 
    // everything is ok
    return res.status(200).json({ // add a json response .json({});
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (err) {
    // if validation fails
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }
    // always return next()
    // middleware
    return next({
      status: 400,
      message: err.message
    });
  }
};
