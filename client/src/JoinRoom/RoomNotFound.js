import React from "react";

const RoomNotFound = ({ showRoomNotFound }) => {
  return (
    <div className="room_not_found_container">
      {showRoomNotFound && (
        <p className="room_not_found_paragraph">
          Invalid room Id. Please try again.
        </p>
      )}
    </div>
  );
};

export default RoomNotFound;
