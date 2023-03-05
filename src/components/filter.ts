import { Component } from "../models/component.js";
import { FilterModel } from "../models/filter.js";
import { foodAllergensTypes } from "../data/allergen-types.js";
import { FilterChip } from "./filter-chip.js";

export const filterItems = foodAllergensTypes.map((allergen) => { return new FilterModel(allergen.code, allergen.name, false); });

export class Filter extends Component<HTMLDivElement, HTMLDivElement> {
    private onSelect: (seletedItem: FilterModel) => void;

    constructor(onSelect: () => void) {
        super("filter-template", "app", true, "chips-filter-root");
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