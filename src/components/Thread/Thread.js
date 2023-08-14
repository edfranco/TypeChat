import { useState } from "react";
import displayMessages from "../../functions/displayMessages";
import getMessageTime from "../../functions/getMessageTime";
import "./Thread.scss";

function Thread(props) {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleMessageSend = (event) => {
    event.preventDefault();
    props.setThread([
      ...props.thread,
      {
        image: props.image,
        author: props.author,
        timeStamp: getMessageTime(),
        body: message,
      },
    ]);
    setMessage("");
  };
  
  return (
    <div className="thread">
        <div onClick={() => props.setDisplayThread(!props.displayThread)} className="exit-button">X</div>
      <div className="thread-messages-container">
        {displayMessages(props.thread)}
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

export default Thread;
