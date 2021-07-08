import React from "react";
import { connect } from "react-redux";
const SingleParticipant = ({ identity, lastItem }) => {
  const getParticipantName = (identity) => {
    return identity.slice(36, identity.length);
  };
  return (
    <>
      <p className="participants_paragraph">{getParticipantName(identity)}</p>
      {!lastItem && <span className="participants_seperator_line"></span>}
    </>
  );
};

const ParticipantsList = (props) => {
  const { participants } = props;
  return (
    <div className="participants_container">
      {participants.map((participant, index) => {
        return (
          <SingleParticipant
            key={participant.identity}
            identity={participant.identity}
            lastItem={participant.length === index + 1}
          ></SingleParticipant>
        );
      })}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(ParticipantsList);
