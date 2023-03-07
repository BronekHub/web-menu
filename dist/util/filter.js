import { menuItems } from "../data/menu-items.js";
export function filterMenuListData(searchValue, filterItems) {
    let result = [];
    const lowerCasedSearchValue = searchValue.toLowerCase().trim();
    const selectedFilterCodes = filterItems.filter((item) => { return item.isSelected; }).map((item) => item.code);
    const filteredMenuList = menuItems.filter((menuItem) => {
        return selectedFilterCodes.length == 0 || selectedFilterCodes.every(filterCode => menuItem.allergenCodes.includes(filterCode));
    });
    result = filteredMenuList.filter((item) => {
        return lowerCasedSearchValue === '' || (item.name.toLowerCase().includes(lowerCasedSearchValue)
            || item.description.toLowerCase().includes(lowerCasedSearchValue)
            || item.foodCategory.toLowerCase().includes(lowerCasedSearchValue));
    });
    return result;
}
//# sourceMappingURL=filter.js.map