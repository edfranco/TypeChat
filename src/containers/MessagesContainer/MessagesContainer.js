import { Component } from "react";
import Message from "../../components/Message/Message";
import MessageHeader from "../../components/MessageHeader/MessageHeader";

import getMessageTime from "../../functions/getMessageTime";
import displayMessages from "../../functions/displayMessages";

class MessagesContainer extends Component {
  state = {
    messagesArr: [],
    message: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMessageSend = (event) => {
    event.preventDefault();
    this.setState({
      messagesArr: [
        ...this.state.messagesArr,
        {
          image: this.props.user.image,
          author: `${this.props.user.firstName} ${this.props.user.lastName}`,
          timeStamp: getMessageTime(),
          body: this.state.message,
        },
      ],
      message: "",
    });
  };

  render() {
    return (
      <div className="message-window">
        <MessageHeader user={this.props.user}/>
        <div className="messages-container">
          <Message
            author={`${this.props.user.firstName} ${this.props.user.lastName}`}
            image={this.props.user.image}
            body="This is the beginning of your conversation with yourself. You can draft messages here, write your notes, store any information you might feel the need to keep locked safe and away from nosy coworkers"
          />
          {displayMessages(this.state.messagesArr)}
        </div>
        <div className="input-container">
          <form onSubmit={this.handleMessageSend}>
            <input
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="send-button"
              onClick={this.handleMessageSend}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessagesContainer;
