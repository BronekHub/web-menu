import { SearchInput } from "./components/search-input.js";
import { Filter, filterItems } from "./components/filter.js";
import { MenuListState } from "./state/menu-list-state.js";
import * as FilterUtil from "./util/filter.js";

const menuListState = MenuListState.getInstance();

//Generate view
new Filter(() => {
    menuListState.updateMenuList(FilterUtil.filterMenuListData(input.getCurrentValue(), filterItems));
});

const input = new SearchInput((searchValue) => {
    menuListState.updateMenuList(FilterUtil.filterMenuListData(searchValue, filterItems));
});

window.onresize = () => {
  menuListState.updateMenuList(FilterUtil.filterMenuListData(input.getCurrentValue(), filterItems));
};

menuListState.updateMenuList(FilterUtil.filterMenuListData(input.getCurrentValue(), filterItems));
