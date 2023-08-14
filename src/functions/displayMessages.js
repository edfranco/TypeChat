import Message from "../components/Message/Message";

const displayMessages = (arr) => {
  return arr.map((message, i) => {
    return (
      <Message
        key={i}
        image={message.image}
        author={message.author}
        timeStamp={message.timeStamp}
        body={message.body}
      />
    );
  });
};

export default displayMessages;