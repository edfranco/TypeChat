function MessageHeader(props) {
    return (
        <div className="message-window-header">
          <h2 className="recipient-name">{props.user.firstName}</h2>
          <div className="recipient-image">
            <img src={props.user.image} />
          </div>
        </div>
    )
};

export default MessageHeader
