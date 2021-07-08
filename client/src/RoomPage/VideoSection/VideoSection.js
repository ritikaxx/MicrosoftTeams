import React from "react";
import { useState } from "react";
import Videos from "./Videos";
import VideoButtons from "./VideoButtons";
const VideoSection = () => {
  const [room, setRoom] = useState(null);
  return (
    <div className="video_section_container">
      <Videos room={room} setRoom={setRoom}></Videos>
      <VideoButtons room={room}></VideoButtons>
    </div>
  );
};

export default VideoSection;
