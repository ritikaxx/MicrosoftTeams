const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const twilioAccountSid = "ACa6c1e7f510adc0859404536f8703d316";
const twilioAuthToken = "f1e86eb22bebffad6a9207e67f2f15ff";
const twilioApiKey = "SKbb26db56ee8a89789488e5cf6319560d";
const twilioApiSecret = "ZdU5jq0Vj4lVjpqYteDinHQ0ts060ZSX";

app.get("/api/token-service", (req, res) => {
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

app.get("/api/room-exists", (req, res) => {
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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started");
  console.log(`Listening at port ${PORT}`);
});
