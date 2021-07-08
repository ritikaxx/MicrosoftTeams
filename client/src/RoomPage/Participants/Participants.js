import React from "react";
import ParticipantsLabel from "./ParticipantsLabel";
import ParticipantsList from "./ParticipantsList";
const Participants = () => {
  return (
    <div className="participants_section_container">
      <ParticipantsLabel></ParticipantsLabel>
      <ParticipantsList></ParticipantsList>
    </div>
  );
};

export default Participants;
