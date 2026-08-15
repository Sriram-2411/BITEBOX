import React, { useState } from "react";
import "./Booktable.css";
import tableImg from "../assets/booktableimg.jpeg";
import axios from "axios";


const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input and remove error while typing
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Date
    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    // Time
    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    // People
    if (!formData.people) {
      newErrors.people = "Enter number of people";
    } else if (formData.people <= 0) {
      newErrors.people = "People must be greater than 0";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
try {

  const response = await axios.post(
    "http://localhost:11000/BookTable",
    formData
  );

  alert(response.data.message);

  setFormData({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  setErrors({});

} catch (error) {

  console.log(error);

  alert("Booking Failed");

}

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        message: "",
      });

      setErrors({});
      
    }
  };

  return (
    <section className="booking">
      <div className="booking-title">
        <p>BOOK A TABLE</p>
        <h1>
          Book Your <span>Table</span> With Us
        </h1>
      </div>

      <div className="booking-container">
        <div className="booking-image">
          <img src={tableImg} alt="booking" />
        </div>

        <div className="booking-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small>{errors.name}</small>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small>{errors.email}</small>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>
            </div>

            <div className="form-row">
              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <small>{errors.date}</small>}
              </div>

              <div>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <small>{errors.time}</small>}
              </div>

              <div>
                <input
                  type="number"
                  name="people"
                  placeholder="# of people"
                  value={formData.people}
                  onChange={handleChange}
                />
                {errors.people && <small>{errors.people}</small>}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <small>{errors.message}</small>}
            </div>

            <button type="submit">Book a Table</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;