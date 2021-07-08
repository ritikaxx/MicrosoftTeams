import React from "react";
import { connect } from "react-redux";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import ScreenSharingButton from "./ScreenSharingButton";
import LeaveRoomButton from "./LeaveRoomButton";
const VideoButtons = (props) => {
  const { room, connectOnlyWithAudio } = props;
  return (
    <div className="video_buttons_container">
      <MicButton room={room}></MicButton>
      {!connectOnlyWithAudio && <CameraButton room={room}></CameraButton>}
      <LeaveRoomButton room={room}></LeaveRoomButton>
      <ScreenSharingButton room={room}></ScreenSharingButton>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(VideoButtons);
