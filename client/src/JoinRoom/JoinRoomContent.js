import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import JoinRoomInputs from "./JoinRoomInputs";
import {
  setConnectOnlyWithAudio,
  setIdentity,
  setRoomId,
} from "../Store/Actions";
import RoomNotFound from "./RoomNotFound";
import JoinRoomButtons from "./JoinRoomButtons";
import OnlyWithAudioBox from "./onlyWithAudioBox";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { checkIfRoomExists } from "../Utils/TwilioUtils";

const JoinRoomContent = (props) => {
  const history = useHistory();
  const {
    isRoomHost,
    setConnectOnlywithAudioAction,
    connectOnlyWithAudio,
    setRoomIdAction,
    setIdentityAction,
    setShowLoading,
  } = props;
  const [roomIdValue, setRoomIdValue] = useState("");
  const [showRoomNotFound, setShowRoomNotFound] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const handleJoinToRoom = async () => {
    setIdentityAction(nameValue);
    if (!isRoomHost) {
      setShowLoading(true);
      const roomExists = await checkIfRoomExists(roomIdValue);
      setShowLoading(false);
      if (roomExists) {
        setRoomIdAction(roomIdValue);
        history.push("/room");
      } else {
        setShowRoomNotFound(true);
      }
    } else {
      setRoomIdAction(uuidv4());
      history.push("/room");
    }
  };

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      ></JoinRoomInputs>
      <OnlyWithAudioBox
        setConnectOnlyWithAudio={setConnectOnlywithAudioAction}
        connectOnlyWithAudio={connectOnlyWithAudio}
      ></OnlyWithAudioBox>
      <RoomNotFound showRoomNotFound={showRoomNotFound}></RoomNotFound>
      <JoinRoomButtons
        isRoomHost={isRoomHost}
        handleJoinToRoom={handleJoinToRoom}
      ></JoinRoomButtons>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setConnectOnlywithAudioAction: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
    setRoomIdAction: (id) => dispatch(setRoomId(id)),
  };
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(JoinRoomContent);
