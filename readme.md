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
ttp -f POST example.org hello=world
```

in terminal:

``` http POST localhost:8081/api/auth/signup ```