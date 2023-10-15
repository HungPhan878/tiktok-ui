// frame

import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faCoins,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import TippyMessage from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// components
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { MessageIcon, UploadIcon } from "~/components/icons";
import Image from "~/components/Image";
import Search from "../Search";

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
  const currentUser = true;

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
      to: "./logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("header")}>
      <div className="container">
        <div className={cx("inner")}>
          <img src={images.logo} alt="tiktok" />

          {/* search */}
          <Search/>

          {/* actions */}
          <div className={cx("actions")}>
            {currentUser ? (
              <>
                <TippyMessage
                  delay={[0, 200]}
                  content="Upload"
                  placement="bottom"
                >
                  <div>
                    <Button className={cx("action-user__btn")}>
                      <UploadIcon />
                    </Button>
                  </div>
                </TippyMessage>

                <TippyMessage
                  delay={[0, 200]}
                  content="Messages"
                  placement="bottom"
                >
                  <div>
                    <Button className={cx("action-user__btn")}>
                      <MessageIcon />
                    </Button>
                  </div>
                </TippyMessage>

                <TippyMessage
                  delay={[0, 200]}
                  content="Inbox"
                  placement="bottom"
                >
                  <div>
                    <Button
                      className={cx(
                        "action-user__btn",
                        "action-user__notification"
                      )}
                    >
                      <FontAwesomeIcon icon={faMessage} />
                    </Button>
                  </div>
                </TippyMessage>
              </>
            ) : (
              <div>
                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Log in
                </Button>
                <Button primary>Log in</Button>
              </div>
            )}

            {/* menu */}
            <Menu
              items={currentUser ? userMenu : Menu_items}
              onChange={handleMenuChange}
            >
              {currentUser ? (
                <Image
                  className={cx("menu-user__btn")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4903a6bb55909ac46cf303498547296f~c5_100x100.jpeg?x-expires=1696514400&x-signature=OENZMc0a4bEOtre2n%2Fm1uzIkgio%3D"
                  alt="hanasii"
                  fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
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
