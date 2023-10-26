// frame
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

// scss
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      className={({ isActive }) => cx("menu-item", { active: isActive })}
      to={to}
    >
      <span className={cx("menu-item__icon")}>{icon}</span>
      <span className={cx("menu-item__icon-active")}>{activeIcon}</span>
      <span className={cx("menu-item__title")}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
