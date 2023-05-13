const express = require ("express") 

const userrouter = express .Router();
const users = require("../userlist");


//get user

userrouter.get("/",(req, res)=>res.send({listusers : users})) ;

userrouter.post(("./login", (req , res)=>{
    let email =req.body.email ;
    let mdp =req.body.mdp ;
    res.send(`my email is ${email} and my mdp is ${mdp} `)
}))


// upadate user

userrouter.get("/boutique" , (req , res)=>{
const  date=new Date();
const  hours =date.getHours();
if (hours>9 && hours<17){
    res.render("opened");  }
else {
res.render("closed");
}
})

userrouter.get("/services" , (req , res)=>{
   
    res.render("services");
    }
    )
    




//add user

module.exports = userrouter ;
