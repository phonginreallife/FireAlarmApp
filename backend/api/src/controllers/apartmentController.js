const mongoose = require('mongoose');
const Apartment = require('../models/ApartmentModel'); // Import the Apartment model

async function getRoomStatus(data) {
  // Check if the message contains a valid ObjectId
  if (data._id && mongoose.Types.ObjectId.isValid(data._id)) {
    console.log('Received _id: ', data._id); // Log the received _id
    try {
      // Retrieve the 'room' field from the document in MongoDB
      const document = await Apartment.findById(data._id).select('room -_id');

      // Log the retrieved document
      console.log('Retrieved document: ', document);

      return document ? document.room : null;
    } catch (err) {
      console.error('Error retrieving document: ', err); // Log any errors
      throw err;
    }
  }
}

module.exports = getRoomStatus;