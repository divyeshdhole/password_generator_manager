const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/credentialsDB");
const credentialsSchema = {
    username : String,
    password :  String
}

let Credentials = mongoose.model("credentials", credentialsSchema);

const app = express()
let password = "";
let username = "";
app.set('view engine', 'ejs')

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("index", {password: password, username: username})
})
app.post("/generate", function(req, res) {
    password = "";
    

    const c = "abcdefghijklmnopqrstuvwxyz";
    const sc = "!@#$%^&*()[]{}<>?\/";
    const n = "1234567890";


    username = req.body.username;
    let password_list = [];
    let length = parseInt(req.body.length);
    let characters = req.body.characters;
    let special_characters = req.body.special_characters;
    let numbers = req.body.numbers;

    let charSet = "";
    let count = 0;
    if(characters)
        charSet += c, count += 1;
    if(special_characters)
        charSet += sc, count += 1;
    if(numbers)
        charSet += n, count += 1;

    
    if(count == 0)
        charSet = c;
    for(let i = 0; i < length; i++) {
        password_list.push(charSet[Math.floor(Math.random()* charSet.length) ]);
    }

    
    password_list.forEach(element => {
        password += element;
    });
    res.redirect("/");
        
        
})


app.post("/save", function(req, res) {
    // console.log("hi");
    let user = new Credentials( {
        username : username,
        password : password
    })
    user.save();
    username = "";
    password = "";
    // console.log("saved!")
    res.redirect("/");
})

let find_password = "";
let find_username = "";

app.get("/find", function(req, res) {
    res.render("find", {password: find_password, username: find_username});
})

app.post("/find", function(req, res) {
    find_password = "";
    find_username = req.body.username;
    // let find_result;
    Credentials.find({username: find_username})
        .then(result=> {
            // console.log(result)

            if(result.length == 0)
                find_password = "Username Doesn't Exit!";
            else
                find_password = result[0].password;
            res.redirect("/find");
        })
        .catch(err => {
            console.error('Error finding documents', err);
            res.status(500).send('Error fetching items');
                
         })
   
})
app.listen(3000, function() {
    console.log("Listening on the port 3000....")
})