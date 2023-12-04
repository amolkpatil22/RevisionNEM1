const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    label: String,
    booked_slots: Array
})

const UserModel = mongoose.model("users", UserSchema)


module.exports = UserModel