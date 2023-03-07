export var MenuItemCategory;
(function (MenuItemCategory) {
    MenuItemCategory[MenuItemCategory["BREAKFAST"] = 0] = "BREAKFAST";
    MenuItemCategory[MenuItemCategory["SWEET_BREAKFAST"] = 1] = "SWEET_BREAKFAST";
    MenuItemCategory[MenuItemCategory["BEVERAGE"] = 2] = "BEVERAGE";
})(MenuItemCategory || (MenuItemCategory = {}));
export class MenuPositionModel {
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
//# sourceMappingURL=menu-position.js.map