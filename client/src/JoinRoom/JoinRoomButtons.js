import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ buttonText, cancelButton, onClickHandler }) => {
  const buttonClass = cancelButton
    ? "join_room_cancel_button"
    : "join_room_success_button";
  return (
    <button className={buttonClass} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

const JoinRoomButtons = (props) => {
  const history = useHistory();
  const { handleJoinToRoom, isRoomHost } = props;
  const successButtonText = isRoomHost ? "Host" : "Join";
  const goToIntroductionPage = () => {
    history.push("/");
  };
  return (
    <div className="join_room_buttons_container">
      <Button
        buttonText={successButtonText}
        onClickHandler={handleJoinToRoom}
      ></Button>
      <Button
        buttonText="Cancel"
        cancelButton
        onClickHandler={goToIntroductionPage}
      ></Button>
    </div>
  );
};

export default JoinRoomButtons;
