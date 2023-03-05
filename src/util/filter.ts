import { menuItems } from "../data/menu-items.js";
import { FilterModel } from "../models/filter.js";
import { MenuItemModel } from "../models/menu-item.js";

export function filterMenuListData(searchValue: string, filterItems: FilterModel[]): MenuItemModel[] {
    const selectedFilterCodes = filterItems.filter((item) => { return item.isSelected; }).map((item) => item.code);

    const filteredMenuList = menuItems.filter((menuItem) => {
      return selectedFilterCodes.length == 0 || selectedFilterCodes.every(filterCode => menuItem.allergenCodes.includes(filterCode));
    });
  
    const newList = filteredMenuList.filter((item) => {
      return searchValue === '' || (item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()));
    });

    return newList;
}