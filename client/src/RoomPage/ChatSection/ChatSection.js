import React from "react";
import ChatLabel from "./ChatLabel";
import Messages from "./Messages";
import NewMessage from "./Newmessage";
const ChatSection = () => {
  return (
    <div className="chat_section_container">
      <ChatLabel></ChatLabel>
      <Messages></Messages>
      <NewMessage></NewMessage>
    </div>
  );
};

export default ChatSection;
