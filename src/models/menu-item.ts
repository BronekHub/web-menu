export enum MenuItemCategory {
    BREAKFAST,
    SWEET_BREAKFAST,
    BEVERAGE,
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
