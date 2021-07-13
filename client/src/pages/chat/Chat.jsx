import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../../components/GroupChat/ChatFeed';
import LoginForm from '../../components/GroupChat/LoginForm';
import "./Chat.css"

const projectID = '3f2bc00b-91f4-4fca-8159-cd8df08f5eca';

export default function Chat()  {
  
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
  
};

