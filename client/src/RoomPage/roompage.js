import React from "react";
import "./roompage.css";
import Participants from "./Participants/Participants";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../Store/Actions";
import { useEffect } from "react";
import { getTokenFromTwilio } from "../Utils/TwilioUtils";
import { useHistory } from "react-router-dom";
import Overlay from "./Overlay";

const RoomPage = (props) => {
  const history = useHistory();
  const { identity, roomId, setTwilioAccessTokenAction, showOverlay } = props;
  useEffect(() => {
    if (!identity || !roomId) {
      history.push("/");
    } else {
      getTokenFromTwilio(setTwilioAccessTokenAction, identity);
    }
  }, []);
  return (
    <div className="room_container">
      <Participants></Participants>
      <VideoSection></VideoSection>
      <ChatSection></ChatSection>
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTwilioAccessTokenAction: (token) =>
      dispatch(setTwilioAccessToken(token)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomPage);
