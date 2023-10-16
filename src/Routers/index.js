import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Product from "~/pages/Product";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";
import routers from "~/config/routes";

const publicRouters = [
  { path: routers.home, component: Home },
  { path: routers.following, component: Following },
  { path: routers.profile, component: Product },
  { path: routers.search, component: Search, layout: null },
  { path: routers.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
