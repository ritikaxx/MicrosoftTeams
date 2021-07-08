import React from "react";
import "./joinroom.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setIsRoomHost } from "../Store/Actions";
import { useLocation } from "react-router-dom";
import JoinRoomTitle from "./JoinRoomTitle";
import LoadingOverlay from "./LoadingOverlay";
import JoinRoomContent from "./JoinRoomContent";
import { useState } from "react";
const JoinRoomPage = (props) => {
  const { setISRoomHostAction, isRoomHost } = props;
  const search = useLocation().search;
  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      setISRoomHostAction(true);
    }
  }, []);

  const [showLoading, setShowLoading] = useState(false);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost}></JoinRoomTitle>
        <JoinRoomContent setShowLoading={setShowLoading}></JoinRoomContent>
        {showLoading && <LoadingOverlay></LoadingOverlay>}
      </div>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setISRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomPage);
