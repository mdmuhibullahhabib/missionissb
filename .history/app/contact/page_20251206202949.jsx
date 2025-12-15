"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="w-full mt-20">
      {/* Hero Section */}
      <div className="bg-[#0A0F2D] text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 text-gray-300 text-sm md:text-lg">
          We’re here to help you achieve your ISSB goal.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-16">
        {/* Email */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition">
          <Mail className="w-10 h-10 text-blue-600" />
          <h3 className="text-xl font-semibold mt-4">Email Us</h3>
          <p className="mt-2 text-gray-600">missionissb@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition">
          <Phone className="w-10 h-10 text-green-600" />
          <h3 className="text-xl font-semibold mt-4">Call Us</h3>
          <p className="mt-2 text-gray-600">+880 1700 000 000</p>
        </div>

        {/* Location */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition">
          <MapPin className="w-10 h-10 text-red-600" />
          <h3 className="text-xl font-semibold mt-4">Our Location</h3>
          <p className="mt-2 text-gray-600">Mirpur, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-xl rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full min-h-[350px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.464193476278!2d90.36011687465832!3d23.766293688196873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0aa8be8bb8f%3A0xaa0f340adcded2c!2sMirpur%206%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
