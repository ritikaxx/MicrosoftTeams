import React from "react";
import ConnectionButton from "./ConnectionButton";
import { useHistory } from "react-router-dom";
const ConnectionButtons = () => {
  const history = useHistory();
  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };
  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };
  return (
    <div className="connection-buttons-container">
      <ConnectionButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      ></ConnectionButton>
      <ConnectionButton
        buttonText="Host a meeting"
        createRoomButton={true}
        onClickHandler={pushToJoinRoomPageAsHost}
      ></ConnectionButton>
    </div>
  );
};

export default ConnectionButtons;
