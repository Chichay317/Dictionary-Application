import { Fragment, useRef } from "react";
import classes from "./SearchInput.module.css";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import Details from "../ListItems/Details";

const SearchInput = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputRefVal = inputRef.current.value;

    if (inputRefVal.trim().length === 0) {
      return;
    }

    props.onSearch(inputRefVal);
  };

  const clearTextHandler = () => {
    inputRef.current.value = "";
  };

  const textChangeHandler = (e) => {
    props.setWordSpelling(e.target.value);

    props.setWord([]);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes["form-group"]}>
          <label htmlFor="text">
            {props.wordSpelling ? props.wordSpelling : "English Dictionary"}
          </label>
          <div className={classes["input-icon"]}>
            <div className={classes["search-box"]}>
              <FaSearch className={classes.search} />
              <input
                type="text"
                id="text"
                placeholder="Search for a word..."
                value={props.wordSpelling}
                onChange={textChangeHandler}
                ref={inputRef}
              ></input>
            </div>
            <div>
              <MdClear className={classes.clear} onClick={clearTextHandler} />
            </div>
          </div>

          {props.isLoading && !props.error && (
            <p className={classes.loading}>Searching...</p>
          )}
          {props.error && <p className={classes.error}>Search Failed!</p>}
          {props.wordItems <= 0 || props.error ? (
            <></>
          ) : (
            <Details word={props.wordItems} wordSpelling={props.wordSpelling} />
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default SearchInput;
