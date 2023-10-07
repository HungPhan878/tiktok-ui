import classNames from "classnames/bind";
import styles from "./PopperWrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, className, arrow }) {
  const classes = cx("wrapper", className, {
    arrow: arrow,
  });

  return <div className={classes}>{children}</div>;
}

export default Wrapper;
