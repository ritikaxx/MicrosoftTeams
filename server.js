const express = require("express");
const path = require("path");
const cors = require("cors");
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
http.use(cors());

http.get('/',(req,res)=>{
  res.send("Server is running");
})
// please enter your twilio account details below to test
const twilioAccountSid = "Enter twilio account sid";
const twilioAuthToken = "enter twilio auth token";
const twilioApiKey = "enter twilio api key";
const twilioApiSecret = "enter twilio api secret";

http.get("/api/token-service", (req, res) => {
  const AccessToken = require("twilio").jwt.AccessToken;

  const VideoGrant = AccessToken.VideoGrant;

  const videoGrant = new VideoGrant();

  const { identity } = req.query;

  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    { identity: identity }
  );

  token.addGrant(videoGrant);

  const accessToken = token.toJwt();

  res.send({
    accessToken: accessToken,
  });
});

http.get("/api/room-exists", (req, res) => {
  const { roomId } = req.query;

  const client = require("twilio")(twilioAccountSid, twilioAuthToken);

  client.video
    .rooms(roomId)
    .fetch()
    .then((room) => {
      if (room) {
        res.send({
          roomExists: true,
          room,
        });
      } else {
        res.send({
          roomExists: false,
        });
      }
    })
    .catch((err) => {
      res.send({
        roomExists: false,
        err,
      });
    });
});

io.on('connection', (socket)=> {
  console.log('User Online');

  socket.on('canvas-data', (data)=> {
        socket.broadcast.emit('canvas-data', data);
        
  })
})


var PORT = process.env.YOUR_PORT ||process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log("server started");
  console.log(`Listening at port ${PORT}`);
});
