const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, location, date, startTime, endTime } = req.body;

    const newBooking = await Booking.create({
      name,
      email,
      phone,
      location,
      date,
      startTime,
      endTime
    });

    res.status(201).json({ message: "Booking Created Successfully", booking: newBooking });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
