import React from "react";
import { useState } from "react";
import CameraImg from "../../resources/camera.svg";
import CameraOffImg from "../../resources/cameraOff.svg";
const CameraButton = ({ room }) => {
  const [isVideoOff, setIsVideoOff] = useState(false);
  const VideoOn = () => {
    room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
      localVideoTrackPublication.track.enable();
    });
  };
  const VideoOff = () => {
    room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
      if (localVideoTrackPublication.track.name !== "screen-share-track") {
        localVideoTrackPublication.track.disable();
      }
    });
  };

  const handleVideoButtonPress = () => {
    isVideoOff ? VideoOn() : VideoOff();
    setIsVideoOff(!isVideoOff);
  };
  return (
    <div className="video_button_container">
      <img
        src={isVideoOff ? CameraOffImg : CameraImg}
        className="video_button_image"
        onClick={handleVideoButtonPress}
      />
    </div>
  );
};

export default CameraButton;
