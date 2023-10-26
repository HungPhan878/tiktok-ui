import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Product from "~/pages/Product";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import Live from "~/pages/Live";
import { HeaderOnly } from "~/Layout";
import config from "~/config";

const publicRouters = [
  { path: config.routers.home, component: Home },
  { path: config.routers.following, component: Following },
  { path: config.routers.profile, component: Product },
  { path: config.routers.live, component: Live },
  { path: config.routers.search, component: Search, layout: null },
  { path: config.routers.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
