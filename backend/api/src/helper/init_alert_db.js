const mongoose = require('mongoose');
const Alert = require('../models/AlertModel');
require('dotenv').config();

async function createDataset() {
    // Connect to your MongoDB database
    await mongoose.connect(process.env.MONGODB_URI)
    
    // Create new Alert documents
    const alert1 = new Alert({
        apartment: new mongoose.Types.ObjectId('659a4e55b88b9369f584b308'),
        smokeDetector: {
          Location: 'Living Room',
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
      });
      
      

    // Save the Alert documents to the database
    await alert1.save();

    console.log('Dataset created successfully');
}

createDataset().catch(console.error);