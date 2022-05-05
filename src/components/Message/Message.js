import './Message.css';
import MessageContainer from './MessageContainer';

const Message = (props) => {
  const mod = `message_${props.modifier}`;

  return (
    <MessageContainer modifier={props.modifier}>
      <p className={`message ${mod}`}>{props.text}</p>
    </MessageContainer>
  );
};

export default Message;
