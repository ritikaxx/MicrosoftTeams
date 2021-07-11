import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { store } from "../Store/store";
import { setMessages } from "../Store/Actions";
import {
  connect,
  LocalAudioTrack,
  LocalVideoTrack,
  LocalDataTrack,
} from "twilio-video";
import { setShowOverlay } from "../Store/Actions";

const audioRules = {
  video: false,
  audio: true,
};
const videoRules = {
  audio: true,
  video: {
    width: 640,
    height: 480,
  },
};

let dataChannel = null;

export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `https://teams-video-chat-application.herokuapp.com/api/room-exists?roomId=${roomId}`
  );
  return response.data.roomExists;
};

export const getTokenFromTwilio = async (setAccessToken, identity) => {
  const randomId = uuidv4();
  const response = await axios.get(
    `https://teams-video-chat-application.herokuapp.com/api/token-service?identity=${randomId}${identity}`
  );
  const data = response.data;
  if (data.accessToken) {
    setAccessToken(data.accessToken);
  }
};

export const connectToRoom = async (
  accessToken,
  roomId = "test-room",
  setRoom
) => {
  const onlyWithAudio = store.getState().connectOnlyWithAudio;
  const rules = onlyWithAudio ? audioRules : videoRules;
  navigator.mediaDevices
    .getUserMedia(rules)
    .then(async (stream) => {
      let tracks;
      const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]);
      const dataTrack = new LocalDataTrack();
      dataChannel = dataTrack;
      let videoTrack;
      if (onlyWithAudio) {
        tracks = [audioTrack, dataTrack];
      } else {
        videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
        tracks = [audioTrack, videoTrack, dataTrack];
      }
      const room = await connect(accessToken, {
        name: roomId,
        tracks,
      });
      console.log("success");
      console.log(room);
      setRoom(room);
      store.dispatch(setShowOverlay(false));
    })
    .catch((err) => {
      console.log("Error occured");
      console.log(err);
    });
};

export const sendMessageUsingDataChannel = (
  content,
  messageCreatedByMe = false
) => {
  const identity = store.getState().identity;
  const ownMessage = {
    identity,
    content,
    messageCreatedByMe,
  };
  addMessageToMessenger(ownMessage);
  const messageToSent = {
    identity,
    content,
  };
  const stringifiedMessage = JSON.stringify(messageToSent);
  dataChannel.send(stringifiedMessage);
};

export const addMessageToMessenger = (message) => {
  const messages = [...store.getState().messages];
  messages.push(message);
  store.dispatch(setMessages(messages));
};
