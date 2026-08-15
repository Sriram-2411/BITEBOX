const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const BookingDB = require("./modal/Booking");
const ContactDB = require("./modal/Contact");
const NewsletterDB = require("./modal/Newsletter");

const port = 11000;

const app = express();

app.use(express.json());
app.use(cors());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to BiteBox Backend");
});



app.post("/BookTable", async (req, res) => {

    const { name, email, phone, date, time, people, message } = req.body;

    const bookingData = {
        name,
        email,
        phone,
        date,
        time,
        people,
        message
    };

    console.log(bookingData);

    try {

        if (
            !name ||
            !email ||
            !phone ||
            !date ||
            !time ||
            !people ||
            !message
        ) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        const booking = new BookingDB(bookingData);

        await booking.save();

        console.log("Booking Saved Successfully");

        return res.status(200).json({
            message: "Table Booked Successfully"
        });

    }

    catch (err) {

        console.log(err);

        return res.status(500).json({
            message: "Server Error"
        });

    }

});

// CONTACT API

app.post("/Contacts", async (req, res) => {

    const { uname, uemail, usubject, umessage } = req.body;

    const contactData = {
        name: uname,
        email: uemail,
        subject: usubject,
        message: umessage
    };

    console.log(contactData);

    try {

        if (!uname || !uemail || !usubject || !umessage) {

            return res.status(400).json({
                message: "Please fill all fields"
            });

        }

        const contact = new ContactDB(contactData);

        await contact.save();

        console.log("Contact Saved Successfully");

        return res.status(200).json({
            message: "Message Sent Successfully"
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: "Server Error"
        });

    }

});
// Newsletter API

app.post("/Newsletter", async (req, res) => {

    const { email } = req.body;

    try {

        if (!email) {

            return res.status(400).json({
                message: "Email is required"
            });

        }

        const newsletter = new NewsletterDB({
            email
        });

        await newsletter.save();

        console.log("Newsletter Saved Successfully");

        return res.status(200).json({
            message: "Subscribed Successfully"
        });

    }

    catch (err) {

        console.log(err);

        return res.status(500).json({
            message: "Server Error"
        });

    }

});

// MongoDB Connection

mongoose.connect("mongodb://127.0.0.1:27017/BiteBox")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("Database Connection Failed", err);
});

// Server

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});