
require('./database/index.js')(); //require and invoke immediately to connect DB

var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 8000;

require('./utilities/middleware.js')(app, express); //config app with required middleware
require('./router.js')(app, express); //define routes for app
// app.use('/static', express.static(__dirname));
app.use('/public', express.static( __dirname + '/public'));



// Socket logic begins here:
var connected = {};

io.on('connection', (socket) => {

  socket.on('connectedFacebookId', function(facebookId) {
    // socket.join(facebookId);

    connected[facebookId] = socket.id;
    console.log('Connected: ', connected);
    // console.log('Connected FacebookId: ', facebookId);
    // console.log('Connected SocketId: ', socket.id);
    console.log('Connected Rooms: ', socket.rooms);
  });
 
  socket.on('notifyOtherUserToFetchLast', function(facebookIds) {
    // If the other person is connected,
    // if (connected.hasOwnProperty('10206426211234693')) { //CHANGE THIS TO A VARIABLE
    // }
    console.log('Connected on fetch: ', connected);
    console.log('Connected Rooms on fetch: ', socket.rooms);
    console.log('Tell this person to fetch: ', facebookIds.toUserFacebookId, ' ', connected[facebookIds.toUserFacebookId]);
    
    var socketToFetch = connected[facebookIds.toUserFacebookId];
    // var socketToFetch = connected['10206426211234693'];
    if (socketToFetch !== undefined) {
      io.to(socketToFetch).emit('fetchLast');
    }
    // socket.emit('hello');
    // socket.broadcast.to('10206426211234693').emit('hello');
    // io.sockets.in('10206426211234693').emit('hello');

  }); 

  socket.on('disconnect', function() {
    // delete connected[facebookId];
  });
});

server.listen(port, (err) => {
  if (err) {
    return console.error('Error listening on port ' + port, err);
  }
  console.log('App is listening on port ' + port); // start listening for requests on port 8000
});

module.exports = app; // export app for testing and flexibility

