// frame

import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowDown,
  faCoins,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import TippyMessage from "@tippyjs/react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

// components
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { faMessage, faMoon, faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const Menu_items = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Vietnamese",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Assembly and support",
    to: "./feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  // useEffect(() => {
  //   setTimeout(() => setSearchResult([]));
  // }, 2000);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //handle
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "./profile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get Coins",
      to: "./coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "./setting",
    },
    ...Menu_items,
    {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: "Dark mode",
      
    },
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to:"./logout",
      separate:true,
    },
  ];
  return (
    <header className={cx("header")}>
      <div className="container">
        <div className={cx("inner")}>
          <img src={images.logo} alt="tiktok" />

          {/* search */}
          <Tippy
            interactive={true}
            // visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx("search-title")}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx("search")}>
              <input
                placeholder="Search"
                spellCheck={false}
                className={cx("search__input")}
              />
              <button className={cx("search-btn__clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>

              <FontAwesomeIcon
                className={cx("search__loading")}
                icon={faSpinner}
              />

              <button className={cx("search-btn__search")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>

          {/* actions */}
          <div className={cx("actions")}>
            {currentUser ? (
              <div>
                <TippyMessage
                  delay={[0, 200]}
                  
                  content="Upload"
                  placement="bottom"
                >
                  <div>
                    <Button className={cx("action-user__btn")}>
                      <FontAwesomeIcon icon={faCloudArrowDown} />
                    </Button>
                  </div>
                </TippyMessage>
                {/* 
                <Button className={cx("action-user__btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </Button>

                <Button className={cx("action-user__btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </Button> */}
              </div>
            ) : (
              <div>
                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Log in
                </Button>
                <Button primary>Log in</Button>
              </div>
            )}

            {/* menu */}
            <Menu items={currentUser?userMenu:Menu_items} onChange={handleMenuChange}>
              {currentUser ? (
                <div>
                  <img
                    className={cx("menu-user__btn")}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4903a6bb55909ac46cf303498547296f~c5_100x100.jpeg?x-expires=1696514400&x-signature=OENZMc0a4bEOtre2n%2Fm1uzIkgio%3D"
                    alt="hanasii"
                  ></img>
                </div>
              ) : (
                <div>
                  <button className={cx("menu-btn")}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
