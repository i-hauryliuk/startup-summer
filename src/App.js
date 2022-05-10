import { useState } from 'react';
import { getUserData, getUserRepos } from './api/github';
import Header from './components/Header/Header';
import MainContent from './components/UI/MainContent';
import UserInfo from './components/UI/UserInfo';
import UserRepos from './components/UI/UserRepos';
import User from './components/User/User';
import Repos from './components/Repos/Repos';
import Message from './components/Message/Message';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageType, setMessageType] = useState('initial');

  const onReceiveQueryHandler = async (query) => {
    if (query) {
      setIsLoading(true);

      try {
        const userData = await getUserData(query);

        if (!userData) {
          setMessageType('empty');
          setUser(null);
          setIsLoading(false);
          return;
        }

        if (userData.reposNumber) {
          const repos = await getUserRepos(
            `${userData.reposUrl}`,
            userData.reposNumber
          );
          userData.repos = repos;
        }

        userData.repos?.length
          ? setMessageType(null)
          : setMessageType('norepos');

        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        setMessageType('error');
        setUser(null);
        setIsLoading(false);
      }
    } else {
      setMessageType('initial');
      setUser(null);
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Header onReceiveQuery={onReceiveQueryHandler} />
      <MainContent>
        {!isLoading && user && (
          <UserInfo>{<User userProfile={user} />}</UserInfo>
        )}
        {!isLoading && (user?.repos?.length || messageType === 'norepos') && (
          <UserRepos>
            {user?.repos?.length && <Repos repos={user.repos} />}
            {messageType === 'norepos' && <Message msgType={messageType} />}
          </UserRepos>
        )}
        {!isLoading && messageType && messageType !== 'norepos' && (
          <Message msgType={messageType} />
        )}
        {isLoading && <p>Loading...</p>}
      </MainContent>
    </div>
  );
};

export default App;
