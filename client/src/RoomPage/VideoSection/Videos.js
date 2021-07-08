import React from "react";
import { connect } from "react-redux";
import TwilioRoom from "./TwilioProgrammableVideo/TwilioRoom";
import RoomLabel from "./RoomLabel";
import { useEffect } from "react";
import { connectToRoom } from "../../Utils/TwilioUtils";
const Videos = (props) => {
  const { room, setRoom, roomId, twilioAccessToken } = props;
  useEffect(() => {
    if (twilioAccessToken) {
      connectToRoom(twilioAccessToken, roomId, setRoom);
    }
  }, [twilioAccessToken]);
  return (
    <div className="videos_container">
      <RoomLabel roomId={roomId}></RoomLabel>
      {room && <TwilioRoom room={room}></TwilioRoom>}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(Videos);
