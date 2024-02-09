import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);

  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    onAddCategory(inputValue);
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          id="miId" 
          value={inputValue}
          type="text"
          placeholder="Buscador Gifs"
          onChange={onChangeInput}
        ></input>
      </form>
    </>
  );
};
