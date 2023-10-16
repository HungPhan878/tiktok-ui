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
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/api-services/searchServices";

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const setDebounce = useDebounce(searchValue, 500);
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
    if (!setDebounce.trim()) {
      setSearchResult([]);

      return;
    }

    // thu vien axios
    //dùng asyns and await
    const fetchApi = async () => {
      setLoading(true);

      const fetch = await searchServices.search(setDebounce);

      setSearchResult(fetch);
      setLoading(false);
    };

    fetchApi();
  }, [setDebounce]);
  return (
    <>
      <Tippy
        interactive={true}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
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
    </>
  );
}

export default Search;
