import React from "react";
import CheckImg from "../resources/check.png";
const OnlyWithAudioBox = (props) => {
  const { setConnectOnlyWithAudio, connectOnlyWithAudio } = props;

  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudio(!connectOnlyWithAudio);
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img src={CheckImg} className="checkbox_image" />
        )}
      </div>
      <p className="checkbox_container_paragraph">Connect only with audio</p>
    </div>
  );
};

export default OnlyWithAudioBox;
