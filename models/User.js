const mongoos = require('mongoose')
const { Schema } = mongoos
const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    picture: String
})
mongoos.model("users",userSchema)