const mongoose = require('mongoose');
const Alert = require('../models/AlertModel');
require('dotenv').config();
console.log(process.env.MONGODB_URI);

async function createDataset() {
    // Connect to your MongoDB database
    await mongoose.connect("mongodb+srv://phugia:Z50j1tmo@atlascluster.hhqailb.mongodb.net/?retryWrites=true&w=majority")
    
    // Create new Alert documents
    const alert1 = new Alert({
        apartment: new mongoose.Types.ObjectId('659a4e55b88b9369f584b308'),
        smokeDetector: {
          Location: 'LivingRoom',
          deviceId: 1,
          deviceType: 'Smoke Detector',
          name: 'Smoke Detector 1',
          ModelNo: 'SD-001',
          Code: 'SD-001',
          deviceDescription: 'Smoke detector in the living room',
          deviceData: 0,
          location: 'Living Room',
          triggerAt: new Date(),
          resolveAt: new Date(),
        },
        flameDetector: {
          Location: 'LivingRoom',
          deviceId: 1,
          deviceType: 'Flame Detector',
          name: 'Flame Detector 1',
          ModelNo: 'SD-001',
          Code: 'SD-001',
          deviceDescription: 'Flame detector in the living room',
          deviceData: 0,
          location: 'LivingRoom',
          triggerAt: new Date(),
          resolveAt: new Date(),
        },
        gasDetector: {
          Location: 'LivingRoom',
          deviceId: 1,
          deviceType: 'gas Detector',
          name: 'Gas Detector 1',
          ModelNo: 'SD-001',
          Code: 'SD-001',
          deviceDescription: 'Gas detector in the living room',
          deviceData: 0,
          location: 'Living Room',
          triggerAt: new Date(),
          resolveAt: new Date(),
        },
        heatDetector: {
          Location: 'LivingRoom',
          deviceId: 1,
          deviceType: 'Heat Detector',
          name: 'Heat Detector 1',
          ModelNo: 'SD-001',
          Code: 'SD-001',
          deviceDescription: 'Smoke detector in the living room',
          deviceData: 0,
          location: 'Living Room',
          triggerAt: new Date(),
          resolveAt: new Date(),
        },

      });
      
      

    // Save the Alert documents to the database
    await alert1.save();

    console.log('Dataset created successfully');
}

createDataset().catch(console.error);