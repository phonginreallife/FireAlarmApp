const io = require('socket.io-client');

const socket = io('ws://localhost:5000');
const apartmentId = ['659a5a0db88b9369f584b310'] 

socket.on('connect', () => {
  console.log('Connected to server');

  // Send a message every 5 seconds
  setInterval(() => {
    for (const apartment in apartmentId){
      try {
        socket.emit('message',JSON.stringify({ _id: apartmentId[apartment] }));
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  }, 1000);
});

socket.on('message', (data) => {
  console.log('Message from server: ', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
