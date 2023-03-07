import { Component } from "../models/component.js";
import { foodAllergensTypes } from "../data/allergen-types.js";
import * as Currency from "../util/currency.js";
export class MenuItem extends Component {
    constructor(hostId, item) {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 600) {
            super("menu-item-template", hostId, false, item.id);
        }
        else {
            super("menu-list-item-small-template", hostId, false, item.id);
        }
        this.imageElement = this.element.querySelector(".menu-item-image");
        this.item = item;
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.element.querySelector(".menu-item-name").textContent = this.item.name;
        this.element.querySelector(".menu-item-description").textContent = this.item.description;
        this.element.querySelector(".menu-item-price").textContent = Currency.convertToCurrency(this.item.price);
        if (this.item.imagePath) {
            this.imageElement.src = this.item.imagePath;
        }
        else {
            this.imageElement.style.objectFit = "none";
        }
        const allergenList = this.element.querySelector(".menu-item-allergens");
        this.item.allergenCodes.forEach((code) => {
            const allergen = foodAllergensTypes.find((el) => el.code === code);
            const img = document.createElement("img");
            img.className = "alergy-icon";
            img.src = allergen.iconPath;
            allergenList.appendChild(img);
        });
    }
}
export class MenuItemHeader extends Component {
    constructor(hostId, headerName) {
        super("menu-item-header-template", hostId, false, headerName);
        this.headerName = headerName;
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.element.textContent = this.headerName;
    }
}
//# sourceMappingURL=menu-item.js.map