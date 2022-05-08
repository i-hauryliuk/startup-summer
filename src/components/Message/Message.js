import './Message.css';
import MessageContainer from './MessageContainer';

const messageTypes = {
  initial: {
    text: 'Start with searching a\u00A0GitHub user',
  },
  empty: {
    text: 'User not found',
  },
  norepos: {
    text: 'Repository list is empty',
  },
  error: {
    text: 'Network error',
  },
};

const Message = (props) => {
  const mod = props.msgType ? `\u0020message_${props.msgType}` : '';

  return (
    <MessageContainer modifier={props.msgType}>
      <p className={`message${mod}`}>{messageTypes[props.msgType].text}</p>
    </MessageContainer>
  );
};

export default Message;
