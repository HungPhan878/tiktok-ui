import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/46d9c424d528917770b045c73e8bf9f2.jpeg?x-expires=1696176000&x-signature=SWc3Ps8qke33FvZrdhWAAMENCE4%3D"
        alt="angel"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>angelica1999</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </p>
        <p className={cx("username")}>angel</p>
      </div>
    </div>
  );
}

export default AccountItem;
