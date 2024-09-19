const mogoose=require("mongoose")

mongoose.connect("mongodb+srv://Krish1418K:Krish1418K@sflix.ft9ef.mongodb.net/?retryWrites=true&w=majority&appName=sflix")
.then(()=>{console.log("DB connect")})
.catch(err=>console.log(err));