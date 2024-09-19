const mogoose =require("mongoose")

let sc=mongoose.Schema;
const loginSchema = new sc({

    username: String,
    password: String,
});