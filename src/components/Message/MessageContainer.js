import './MessageContainer.css';

const Message = (props) => {
  const mod = `message-container_${props.modifier}`;

  return <div className={`message-container ${mod}`}>{props.children}</div>;
};

export default Message;
