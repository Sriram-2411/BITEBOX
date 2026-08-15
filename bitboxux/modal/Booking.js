const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    people:{
        type:Number,
        required:true
    },

    message:{
        type:String,
        required:true
    }

},{
    collection:"B-bookings"
});

module.exports = mongoose.model(
    "B-bookings",
    bookingSchema,
    "B-bookings"
);