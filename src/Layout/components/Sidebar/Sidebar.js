import classNames from "classnames/bind";

// scss
import styles from "./Sidebar.module.scss";

// components
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  FollowingIcon,
  ExploreIcon,
  LiveIcon,
  HomeIconActive,
  FollowingIconActive,
  LiveIconActive,
  ExploreIconActive,
} from "~/components/icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
          to={config.routers.home}
        />
        <MenuItem
          title="Following"
          icon={<FollowingIcon />}
          activeIcon={<FollowingIconActive />}
          to={config.routers.following}
        />
        <MenuItem
          title="Explore"
          icon={<ExploreIcon />}
          activeIcon={<ExploreIconActive />}
          to={config.routers.explore}
        />
        <MenuItem
          title="Live"
          icon={<LiveIcon />}
          to={config.routers.live}
          activeIcon={<LiveIconActive />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
