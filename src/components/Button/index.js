import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";
import { type } from "@testing-library/user-event/dist/type";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  rounded = false,
  disable = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    small,
    large,
    rounded,
    disable,
    [className] : className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
