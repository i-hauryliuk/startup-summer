import { useDebugValue, useState } from 'react';
import { getUserData, getUserRepos } from './api/github';
import Header from './components/Header/Header';
import User from './components/User/User';
import Message from './components/Message/Message';
import './App.css';

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
      <main className="main">
        <div className="main__wrapper">
          <div className="main__user-info">
            {!isLoading && user && <User userProfile={user} />}
          </div>
          <div className="main__user-repos">
            {!isLoading &&
              user?.repos?.length &&
              user.repos.map((repo) => (
                <p key={repo.id}>{JSON.stringify(repo)}</p>
              ))}
            {!isLoading && messageType && <Message msgType={messageType} />}
            {isLoading && <p>Loading...</p>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
