import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

// components
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/services/searchService";
import ListSearch from "../ListSearch";

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const setDebounceValue = useDebounce(searchValue, 500);
  //   handle
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;

    if (!inputValue.startsWith(" ")) {
      setSearchValue(inputValue);
    }
  };

  useEffect(() => {
    if (!setDebounceValue.trim()) {
      setSearchResult([]);

      return;
    }

    // thu vien axios
    //dùng asyns and await
    const fetchApi = async () => {
      setLoading(true);

      const fetch = await searchServices.search(setDebounceValue);

      setSearchResult(fetch);
      setLoading(false);
    };

    fetchApi();
  }, [setDebounceValue]);
  return (
    //Using a wrapper <div> or <span> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
      <Tippy
        interactive={true}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>

              {/* list Search */}
              <ListSearch searchResult={searchResult} />
              
            </PopperWrapper>
          </div>
        )}
        onClickOutside={() => setShowResult(false)}
      >
        <div className={cx("search")}>
          <input
            value={searchValue}
            placeholder="Search"
            ref={inputRef}
            spellCheck={false}
            className={cx("search__input")}
            onChange={handleInput}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx("search-btn__clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon
              className={cx("search__loading")}
              icon={faSpinner}
            />
          )}

          <button className={cx("search-btn__search")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
