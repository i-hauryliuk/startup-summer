import { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(enteredValue.trim());
  };

  return (
    <form className="search-form" onSubmit={onSubmitHandler}>
      <input
        onChange={onChangeHandler}
        className="search-form__input"
        type="text"
        value={enteredValue}
        placeholder="Enter GitHub username"
      />
    </form>
  );
};

export default SearchForm;
