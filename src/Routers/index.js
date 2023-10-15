import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Product from "~/pages/Product";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";

const publicRouters = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/:nickname", component: Product },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
