const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  status: Number,
});

const roomSchema = new mongoose.Schema({
  status: Number,
  sensors: {
    smokeDetector: sensorSchema,
    heatDetector: sensorSchema,
    gasDetector: sensorSchema,
    flameDetector: sensorSchema,
  },
});

const apartmentSchema = new mongoose.Schema({
  apartmentNo: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  building: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  room: {
    status: Number,
    bedRoom: roomSchema,
    livingRoom: roomSchema,
    kitchen: roomSchema,
  },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;