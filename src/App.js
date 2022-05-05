import './App.css';
import Header from './components/Header/Header';
import Message from './components/Message/Message';

const App = () => {
  const message = {
    modifier: 'initial',
    test: 'Start with searching a&nbsp;GitHub user',
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <div className="main__user-info"></div>
          <div className="main__user-repos">
            <Message modifier={message.modifier} text={message.test} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
