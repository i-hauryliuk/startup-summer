import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter GitHub username"
      />
    </form>
  );
};

export default SearchForm;
