import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from "./PopperWrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, className, arrow }) {
  const classes = cx("wrapper", className, {
    arrow: arrow,
  });

  return <div className={classes}>{children}</div>;
}

Wrapper.propTypes = {

  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  arrow: PropTypes.bool,
}

export default Wrapper;
