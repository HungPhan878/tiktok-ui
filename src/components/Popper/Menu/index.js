import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/svg-arrow.css";
import classNames from "classnames/bind";

// components
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items, hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const currentMenu = history[history.length - 1];

  const renderItem = () => {
    return currentMenu.data.map((item, index) => {
      const isParents = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParents) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      offset={[12, 12]}
      delay={[0, 700]}
      interactive={true}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      // visible
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper", "arrow")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.splice(history.length - 1));
                }}
              />
            )}

            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHidden={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
