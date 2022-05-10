import './MainContent.css';

const MainContent = (props) => {
  return (
    <main className="main">
      <div className="main__wrapper">{props.children}</div>
    </main>
  );
};

export default MainContent;
