// ## Part 2. Use the express built in REST methods to do the same thing as Part 1
// * Give your server the ability to respond to a GET request with a path "/users" and 
// return the users array from state.js
// * Give your server the ability to respond to a GET request with a path "/users/1" and 
// return the first user object from the users array from state.js
// * Give your server the ability to respond to a POST request with a path "/users" and 
// just add a hard coded user object to the users array from state.js. .json() the last user 
// in the array to send it back to the client. (if you do another GET request you should see 
// this added)
// * Give your server the ability to respond to a PUT request with a path "/users/1" and 
// just change any key value on the first user object in the users array in state.js. .json()
// this user to send it back to the client.
// * Give your server the ability to respond to a DELETE request with a path "/users/1" and 
// remove one item from the users array. send() back a messsage "deleted"

let express = require("express");
const app = express();
let state = require("./state");
let users = state.users;
let bodyParser = require("body-parser");
app.use(bodyParser.json());
let ContactRoutes = require("./routes/ContactRoutes");
app.use(ContactRoutes);



app.use(express.static('public'));

app.get("/users",function(req,res,next)
{
   return res.json(users);
 });

 app.get("/users/:userId",function(req,res,next) {
  res.json(users.find(user => user._id == req.params.userId));
  });

// app.get("/users/1",function(req,res,next)
// {
//    return res.json(users[0]);
//  });

app.post("/users",function(req,res,next) {
  let newUser = req.body;
  users.push(newUser);
  res.json(newUser);
 });

app.put("/users",function(req,res,next)
{
   return res.json(users.push({}));
 });

app.delete("/users",function(req,res,next)
{
   return res.json(users.pop({}));
 });

 app.use(function(req,res,next) {
 return res.send("what do you want?");
});


//I want to live in apartment 3002
app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
