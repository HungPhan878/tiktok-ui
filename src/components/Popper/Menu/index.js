import { useState } from "react";
import PropTypes from "prop-types";
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

  // handle
  const handleRender = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper", "arrow")}>
        {history.length > 1 && (
          <Header
            title={currentMenu.title}
            onBack={() => {
              setHistory((prev) => prev.splice(history.length - 1));
            }}
          />
        )}

        <div className={cx("menu-items")}>{renderItem()}</div>
      </PopperWrapper>
    </div>
  );

  // reset menu comeback
  const resetMenuPage = () => setHistory((prev) => prev.slice(0, 1));
  
  return (
    <div>
      <Tippy
        offset={[12, 12]}
        delay={[0, 700]}
        interactive={true}
        hideOnClick={hideOnClick}
        placement="bottom-end"
        // visible
        render={handleRender}
        onHidden={resetMenuPage}
      >
        {children}
      </Tippy>
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
