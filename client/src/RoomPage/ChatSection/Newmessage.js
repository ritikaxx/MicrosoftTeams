import React from "react";
import { useState } from "react";
import SendMessageButton from "../../resources/sendMessageButton.svg";
import { sendMessageUsingDataChannel } from "../../Utils/TwilioUtils";
const NewMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    sendMessageUsingDataChannel(message, true);
    setMessage("");
  };
  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };
  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className="new_message_container">
      <input
        className="new_message_input"
        value={message}
        onChange={handleTextChange}
        placeholder="Type your message"
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <img
        src={SendMessageButton}
        className="new_message_button"
        onClick={sendMessage}
      />
    </div>
  );
};
export default NewMessage;
