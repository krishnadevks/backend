const express=require("express")
const cors=require("cors")

const Database =require("./connection/database");
const Loginroute=require("./routes/loginrouter");


//initializing part

const app = new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

//api creation

app.get('/',(request,response)=>{
    response.send("hi")
})

app.use("/Login",Loginroute);

//port

app.listen(4005,(request,response)=>{
    console.log("server is running on port 40005");
});