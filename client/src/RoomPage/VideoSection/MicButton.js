import React from "react";
import { useState } from "react";
import MicButtonImg from "../../resources/mic.svg";
import MicButtonOffImg from "../../resources/micOff.svg";
const MicButton = ({ room }) => {
  const [isMicMuted, setIsMicMuted] = useState(false);
  const mute = () => {
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.disable();
    });
  };
  const unmute = () => {
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.enable();
    });
  };
  const handleMicButtonPressed = () => {
    isMicMuted ? unmute() : mute();
    setIsMicMuted(!isMicMuted);
  };
  return (
    <div className="video_button_container">
      <img
        src={isMicMuted ? MicButtonOffImg : MicButtonImg}
        className="video_button_image"
        onClick={handleMicButtonPressed}
      />
    </div>
  );
};

export default MicButton;
