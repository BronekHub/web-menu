import { Component } from "../models/component.js";
import { MenuItemModel } from "../models/menu-item.js";
import { foodAllergensTypes } from "../data/allergen-types.js";
import * as Currency from "../util/currency.js";

export class MenuItem extends Component<HTMLDivElement, HTMLDivElement> {
    private item: MenuItemModel;
  
    constructor(hostId: string, position: MenuItemModel) {
      const screenWidth = window.innerWidth;
  
      if (screenWidth >= 600) {
        super("menu-position-template", hostId, false, position.id);
      } else {
        super("menu-list-position-small-template", hostId, false, position.id);
      }
  
      this.item = position;
      this.renderContent();
    }
  
    configure(): void {}
  
    renderContent(): void {
      this.element.querySelector(".menu-position-name")!.textContent = this.item.name;
      this.element.querySelector(".menu-position-short-description")!.textContent = this.item.description;
      this.element.querySelector(".position-price")!.textContent = Currency.convertToCurrency(this.item.price);
  
      if (this.item.imagePath) {
        (this.element.querySelector(".position-image")! as HTMLImageElement).src = this.item.imagePath!;
      }
  
      const allergenList = this.element.querySelector(".menu-position-allergens") as HTMLDivElement;
  
      this.item.allergenCodes.forEach((code) => {
        const allergen = foodAllergensTypes.find((el) => el.code === code);
        const img = document.createElement("img") as HTMLImageElement;
        img.className = "alergy-icon";
        img.src = allergen!.iconPath;
  
        allergenList.appendChild(img);
      });
    }
}
  
