import React from "react";

const LeaveRoomButton = ({ room }) => {
  const handleRoomDiconnection = () => {
    room.disconnect();
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };
  return (
    <div className="video_button_container">
      <button className="video_button_end" onClick={handleRoomDiconnection}>
        Leave Meeting
      </button>
    </div>
  );
};

export default LeaveRoomButton;
