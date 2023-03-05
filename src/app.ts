import { Component } from "./models/component.js";
import { MenuItemModel } from "./models/menu-item.js";
import { allMenuItems } from "./data/menu-items.js";
import { FilterModel } from "./models/filter.js";
import { foodAllergensTypes } from "./data/allergen-types.js";
import { SearchInput } from "./components/search-input.js";

class MenuListState {
  private static instance: MenuListState;
  private menuItems: MenuItemModel[] = [];

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new MenuListState();
      return this.instance;
    }
  }

  updateMenuList(menuItems: MenuItemModel[]) {
    this.menuItems = menuItems;
    
    const container = document.getElementById("menu-list-container")!;
    container.innerHTML = "";

    this.menuItems.forEach((item) => {
      new MenuPosition("menu-list-container", item);
    });
  }
}

const filterItems = foodAllergensTypes.map((allergen) => { return new FilterModel(allergen.code, allergen.name, false); })

class Filter extends Component<HTMLDivElement, HTMLDivElement> {
    private filterChipsContainer: HTMLDivElement;
    private onSelect: () => void;

    constructor(onSelect: () => void) {
        super("filter-template", "menu-container", true, "chips-filter-root");
        this.filterChipsContainer = this.element.querySelector(".filter-container")! as HTMLDivElement;
        this.onSelect = onSelect;
        this.renderContent();
    }

    configure(): void {
    }
    
    renderContent(): void {
        filterItems.forEach((item) => {
            new FilterChip("chips-filter-root", item, () => {
                this.onSelect();
            });
        });
    }
} 


class FilterChip extends Component<HTMLDivElement, HTMLDivElement> {
    private item: FilterModel;
    private itemName: HTMLDivElement;
    private itemIconSelected: HTMLSpanElement;
    private onSelect: () => void;

    constructor(hostId: string, item: FilterModel, onSelect: () => void) {
        super("filter-item-template", hostId, false, "filter-chip-root");
        this.itemName = this.element.querySelector("#filter-item-name")! as HTMLDivElement;
        this.itemIconSelected = this.element.querySelector("span")! as HTMLSpanElement;
        this.onSelect = onSelect;
        this.item = item;
        this.renderContent();
    }

    configure(): void {
    }

    renderContent(): void {
        this.setupComponents();

        this.element.addEventListener("click", (e) => {
            var index = filterItems.indexOf(this.item);
            filterItems[index].isSelected = !filterItems[index].isSelected;
            this.setupComponents();
            this.onSelect();
        });
    }

    private setupComponents() {
        this.itemIconSelected.style.display = this.item.isSelected ? 'inline' : 'none';
        this.element.className = this.item.isSelected ? 'filter-item selected' : 'filter-item';
        this.itemName.textContent = this.item.name;
    } 
} 


class MenuPosition extends Component<HTMLDivElement, HTMLDivElement> {
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
    this.element.querySelector(".position-price")!.textContent = convertToCurrency(this.item.price);

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

function convertToCurrency(price: number): string {
  return price.toLocaleString("en-US", { style: "currency", currency: "PLN" });
}

function generateNewMenuList(searchValue: string): MenuItemModel[] {
    const selectedFilterCodes = filterItems.filter((item) => { return item.isSelected; }).map((item) => item.code);

    const filteredMenuList = allMenuItems.filter((menuItem) => {
      return selectedFilterCodes.length == 0 || menuItem.allergenCodes.some(code => selectedFilterCodes.some(filterCode => filterCode == code));
    });
  
    const newList = filteredMenuList.filter((item) => {
      return searchValue === '' || (item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()));
    });

    return newList;
}

const menuListState = MenuListState.getInstance();

const input = new SearchInput((value) => {
    menuListState.updateMenuList(generateNewMenuList(value));
});

new Filter(() => {
    menuListState.updateMenuList(generateNewMenuList(input.getCurrentValue()));
});



window.onresize = () => {
  menuListState.updateMenuList(generateNewMenuList(input.getCurrentValue()));
};

menuListState.updateMenuList(generateNewMenuList(input.getCurrentValue()));
