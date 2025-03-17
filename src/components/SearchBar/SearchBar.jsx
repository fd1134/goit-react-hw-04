import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.search.value;
    searchValue.trim() === ""
      ? (setIsEmpty(true), toast.error("Please enter a value."))
      : (setIsEmpty(false), onSearch(searchValue));
    form.reset();
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit} className={css.searchcontainer}>
          <input
            type="text"
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit">
            <IoIosSearch />
          </button>
        </form>
      </header>
      {isEmpty && <Toaster position="top-right" reverseOrder={false} />}
    </>
  );
};

export default SearchBar;
