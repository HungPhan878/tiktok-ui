import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon
              className={cx("check-icon")}
              icon={faCheckCircle}
            />
          )}
        </p>
        <p className={cx("username")}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
