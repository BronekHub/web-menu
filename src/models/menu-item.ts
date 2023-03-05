export enum MenuItemCategory {
    BREAKFAST = "Breakfast",
    SWEET_BREAKFAST = "Sweet breakfast",
    COFFEES = "Coffees",
    TEAS = "Teas",
    COCKTAILS = "Cocktails",
}

export class MenuItemModel {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public price: number,
      public allergenCodes: string[],
      public foodCategory: MenuItemCategory,
      public imagePath?: string
    ) {}
}
