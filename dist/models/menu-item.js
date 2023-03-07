export var MenuItemCategory;
(function (MenuItemCategory) {
    MenuItemCategory["BREAKFAST"] = "Breakfast";
    MenuItemCategory["SWEET_BREAKFAST"] = "Sweet breakfast";
    MenuItemCategory["COFFEES"] = "Coffees";
    MenuItemCategory["TEAS"] = "Teas";
    MenuItemCategory["COCKTAILS"] = "Cocktails";
})(MenuItemCategory || (MenuItemCategory = {}));
export class MenuItemModel {
    constructor(id, name, description, price, allergenCodes, foodCategory, imagePath) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.allergenCodes = allergenCodes;
        this.foodCategory = foodCategory;
        this.imagePath = imagePath;
    }
}
//# sourceMappingURL=menu-item.js.map