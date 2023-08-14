import { useState, useRef, useEffect } from "react";
import Message from "../../components/Message/Message";
import MessageHeader from "../../components/MessageHeader/MessageHeader";

import getMessageTime from "../../functions/getMessageTime";
import displayMessages from "../../functions/displayMessages";

function MessagesContainer(props) {
  const [messagesArr, setMessagesArr] = useState([]);
  const [message, setMessage] = useState("");

  const bottom = useRef(null);

  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSend = (event) => {
    event.preventDefault();
    scrollToBottom();
    setMessagesArr([
      ...messagesArr,
      {
        image: props.user.image,
        author: `${props.user.firstName} ${props.user.lastName}`,
        timeStamp: getMessageTime(),
        body: message,
      },
    ]);
    setMessage("");
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className="message-window">
      <MessageHeader user={props.user} />
      <div className="messages-container">
        <Message
          author={`${props.user.firstName} ${props.user.lastName}`}
          image={props.user.image}
          body="This is the beginning of your conversation with yourself. You can draft messages here, write your notes, store any information you might feel the need to keep locked safe and away from nosy coworkers"
        />
        {displayMessages(messagesArr)}
        <div ref={bottom} className="chat-bottom"></div>
      </div>
      <div className="input-container">
        <form onSubmit={handleMessageSend}>
          <input
            placeholder="Message"
            name="message"
            value={message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="send-button"
            onClick={handleMessageSend}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessagesContainer;
