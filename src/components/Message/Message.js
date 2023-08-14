import { useState } from "react";
import Thread from "../Thread/Thread";
import getMessageTime from "../../functions/getMessageTime";
import "./Message.scss";

function Message(props) {
  const [thread, setThread] = useState([]);
  const [displayThread, setDisplayThread] = useState(false);
  const [displayThreadInput, setDisplayInput] = useState(false);
  const [threadMessageBody, setThreadMessageBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayInput(!displayThreadInput);
    setDisplayThread(!displayThread);
    setThread([
      ...thread,
      {
        image: props.image,
        author: props.author,
        timeStamp: getMessageTime(),
        body: threadMessageBody,
      },
    ]);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setThreadMessageBody(event.target.value);
  };

  return (
    <div className="message">
      <div className="message-content">
        <div className="author-image-container">
          <img src={props.image} />
        </div>
        <div className="message-text">
          <div className="message-info">
            <div className="message-author-name">
              <p>{props.author}</p>
            </div>
            <div className="message-time-stamp">
              <p>{props.timeStamp}</p>
            </div>
          </div>
          <div className="message-content">
            <p>{props.body}</p>
          </div>
          <div className="thread-info">
            <p
              className="reply-button"
              onClick={() => setDisplayInput(!displayThreadInput)}
            >
              Reply
            </p>
            {thread.length ? (
              <p onClick={() => setDisplayThread(!displayThread)}>
                View {thread.length} {thread.length > 1 ? "replies" : "reply"}
              </p>
            ) : null}
          </div>
          <form
            onSubmit={handleSubmit}
            style={
              displayThreadInput ? { display: "block" } : { display: "none" }
            }
          >
            <input value={threadMessageBody} onChange={handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
      {displayThread ? (
        <Thread
          messages={thread}
          image={props.image}
          author={props.author}
          displayThread={displayThread}
          setDisplayThread={setDisplayThread}
          thread={thread}
          setThread={setThread}
        />
      ) : null}
    </div>
  );
}

export default Message;
