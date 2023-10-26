// frame
import PropTypes from 'prop-types';
import classNames from "classnames/bind";

// scss
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({children}) {
    return ( 

        <nav className={cx("menu-list")}>{children}</nav>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu;