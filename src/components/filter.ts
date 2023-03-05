import { Component } from "../models/component.js";
import { FilterModel } from "../models/filter.js";
import { foodAllergensTypes } from "../data/allergen-types.js";

export const filterItems = foodAllergensTypes.map((allergen) => { return new FilterModel(allergen.code, allergen.name, false); });

export class Filter extends Component<HTMLDivElement, HTMLDivElement> {
    private onSelect: (seletedItem: FilterModel) => void;

    constructor(onSelect: () => void) {
        super("filter-template", "menu-container", true, "chips-filter-root");
        this.onSelect = onSelect;
        this.renderContent();
    }

    configure(): void {
    }
    
    renderContent(): void {
        filterItems.forEach((item) => {
            new FilterChip("chips-filter-root", item, (selectedItem) => {
                var index = filterItems.indexOf(selectedItem);
                filterItems[index].isSelected = !filterItems[index].isSelected;
                this.onSelect(selectedItem);
            });
        });
    }
} 

export class FilterChip extends Component<HTMLDivElement, HTMLDivElement> {
    private item: FilterModel;
    private itemName: HTMLDivElement;
    private itemIconSelected: HTMLSpanElement;
    private onSelect: (selectedItem: FilterModel) => void;

    constructor(hostId: string, item: FilterModel, onSelect: (item: FilterModel) => void) {
        super("filter-item-template", hostId, false, "filter-chip-root");
        this.itemName = this.element.querySelector("#filter-item-name")! as HTMLDivElement;
        this.itemIconSelected = this.element.querySelector("span")! as HTMLSpanElement;
        this.onSelect = onSelect;
        this.item = item;
        this.renderContent();
    }

    configure(): void {}

    renderContent(): void {
        this.setupComponents();

        this.element.addEventListener("click", (e) => {
            this.onSelect(this.item);
            this.setupComponents();
        });
    }

    private setupComponents() {
        this.itemIconSelected.style.display = this.item.isSelected ? 'inline' : 'none';
        this.element.className = this.item.isSelected ? 'filter-item selected' : 'filter-item';
        this.itemName.textContent = this.item.name;
    } 
} 