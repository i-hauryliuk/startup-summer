import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img
            className="logo"
            src="./img/logo.svg"
            alt="GitHub octocat outline"
            width="41"
            height="40"
          />
        </div>
        <div className="header__search">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
