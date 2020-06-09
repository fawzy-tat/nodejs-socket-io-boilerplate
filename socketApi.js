let socket_io = require('socket.io');
let io = socket_io();
let socketApi = {};
//Your socket logic here
io.on('connection',socket =>{
    console.log("socket connection made successfully",socket.id);
});
socketApi.io = io;
module.exports = socketApi;