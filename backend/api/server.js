const express = require('express');
const getRoomStatus = require('./src/controllers/apartmentController');
const http = require('http');
const socketIo = require('socket.io');
require("dotenv").config();


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

io.on('connection', (socket) => {
  socket.on('message', async (message) => {
    let data;
    try {
      data = JSON.parse(message);
    } catch (error) {
      console.log(`[${new Date().toISOString()}] Invalid JSON: ${message}`);
      data = {};
    }

    try {
      const room = await getRoomStatus(data);

      // Send the 'room' field back to the client
      if (room) {
        socket.emit('message', JSON.stringify(room));
      }
    } catch (err) {
      console.error(`[${new Date().toISOString()}] Error handling message: ${err}`);
    }
  socket.on('close', () => {
      console.log('Client disconnected');
    });
  });
});


const apiRoutes = require("./src/routes/apiRoutes");



// mongodb connection
const connectDB = require("./src/config/db");
connectDB();

app.use("/api", apiRoutes);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`[${new Date().toISOString()}] Listening on port ${port}`));
