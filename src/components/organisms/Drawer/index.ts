import { DRAWER_KEYS, DrawerKey } from "@/constants/drawerContentMap";
import { FilterArticleDrawer } from "./FilterArticle";
import { DrawerPropsMap } from "@/types/drawerProps";

type DrawerComponentMap = {
  [K in DrawerKey]: React.FC<DrawerPropsMap[K]>;
};

export const DrawerComponentMap: DrawerComponentMap = {
  [DRAWER_KEYS.FILTER_ARTICLE]: FilterArticleDrawer,
};
