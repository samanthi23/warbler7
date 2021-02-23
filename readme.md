# Warbler Solution

## Getting started

1.  In the `warbler-server` folder

    * `npm install`
    * `nodemon` (if installed) or `node index.js`

2.  In the `warbler-client` folder

    * `npm install`
    * `npm start`
    
## my notes

``` touch .env ```

``` npm install dotenv ```

# index.js file
 
``` require("dotenv").config(); ``` 

use .env variables inside our auth.js

# process.env.____

process.env.SECRET_KEY

# then add logic to our routes

routes/auth.js

# index.js root directory

```
const authRoutes = require("./routes/auth");
``` 

in the beginning of file

```
app.use("/api/auth", authRoutes);
```

middleware

if there is ever any request that starts with /api/auth, go and use these auth routes

so api/auth/signin

so api/auth/signup

# httpie

```
http -f POST example.org hello=world
```

in terminal:

``` http POST localhost:8081/api/auth/signup ```

# to do, install httpie

failed

need username required etc..

``` http POST localhost:8081/api/auth/signup username=firstuser password=secret email=test@firsttest.com```

{
    "id": "hash"
,
    "token": "hash",
    "username": "firstuser"
}

# review

## index.js, load env variables to process.env.____

secret_key

## error.js, key of error object of message

## user.js, user model

mongoose middleware

make sure user entered a password

hash the password

then set the password

if anything goes wrong send it to the error handler

compare password to whatever is inside the database, returns a boolean true or false

## auth.js in handlers folder

simply signed up a User

created a user 

and created a token

responded with some JSON: id, username, profileImageUrl, token

11000, error code, validation has failed, not unique username, already taken username






