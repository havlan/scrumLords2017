<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## serializeUser

Serializes the user and creates a session.

## deserializeUser

Deserializes the user.

## use

Authorizes the user login input.

## generatePassword

Generates a random password.

Returns **any** password

## genRandomString

generates random string of characters i.e salt

**Parameters**

-   `length` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Length of the random string.

## sha512

hash password with sha512.

**Parameters**

-   `password` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** List of required fields.
-   `salt` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Data to be validated.

## 

return required number of characters

## 

convert to hexadecimal format

## update

Hashing algorithm sha512

## passwordData

Gives us salt of length 16

## getdbQuery

Connects to the database and executes the inserted query.
Sends back the result. Used for GET-requests.

**Parameters**

-   `req`  
-   `res`  
-   `query`  
-   `get`  

## postdbQuery

Connects to the database and executes the inserted query.
Sends back the result. Used for POST-requests.

**Parameters**

-   `req`  
-   `res`  
-   `query`  
-   `post`  