import { Component } from "../models/component.js";
import { FilterModel } from "../models/filter.js";
import { foodAllergensTypes } from "../data/allergen-types.js";
import { FilterChip } from "./filter-chip.js";
export const filterItems = foodAllergensTypes.map((allergen) => { return new FilterModel(allergen.code, allergen.name, false); });
export class Filter extends Component {
    constructor(onSelect) {
        super("filter-template", "app", true, "chips-filter-root");
        this.onSelect = onSelect;
        this.renderContent();
    }
    configure() {
    }
    renderContent() {
        filterItems.forEach((item) => {
            new FilterChip("chips-filter-root", item, (selectedItem) => {
                var index = filterItems.indexOf(selectedItem);
                filterItems[index].isSelected = !filterItems[index].isSelected;
                this.onSelect(selectedItem);
            });
        });
    }
}
//# sourceMappingURL=filter.js.map