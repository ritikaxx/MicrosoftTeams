import React from "react";
import { useState } from "react";
import ScreenSharingImg from "../../resources/screenshare3.svg";
import { LocalVideoTrack } from "twilio-video";
import LocaLScreenSharingPreview from "./LocalScreenSharingPreview";
const ScreenSharingButton = ({ room }) => {
  const [screenShareTrack, setScreenShareTrack] = useState(null);
  const [isScreenShared, setIsScreenIsShared] = useState(false);
  const [screenPreview, setScreenPreview] = useState(null);
  const handleScreenShareButtonPress = () => {
    if (!isScreenShared) {
      navigator.mediaDevices
        .getDisplayMedia()
        .then((stream) => {
          setIsScreenIsShared(true);
          setScreenPreview(stream);
          const screenTrack = new LocalVideoTrack(stream.getVideoTracks()[0], {
            name: "screen-share-track",
          });
          room.localParticipant.publishTrack(screenTrack);
          setScreenShareTrack(screenTrack);
          stream.getVideoTracks()[0].onended = () => {
            room.localParticipant.unpublishTrack(screenTrack);
            setIsScreenIsShared(false);
            setScreenShareTrack(null);
            setScreenPreview(null);
          };
        })
        .catch((err) => {
          console.log("Error occured");
          console.log(err);
        });
    } else {
      screenShareTrack.stop();
      room.localParticipant.unpublishTrack(screenShareTrack);
      setScreenShareTrack(null);
      setIsScreenIsShared(false);
      setScreenPreview(null);
    }
  };
  return (
    <>
      <div className="video_button_container">
        <img
          src={ScreenSharingImg}
          className="video_button_image"
          onClick={handleScreenShareButtonPress}
        />
      </div>

      {isScreenShared && (
        <LocaLScreenSharingPreview
          stream={screenPreview}
        ></LocaLScreenSharingPreview>
      )}
    </>
  );
};

export default ScreenSharingButton;
