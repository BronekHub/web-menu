import { Component } from "../models/component.js";
export class FilterChip extends Component {
    constructor(hostId, item, onSelect) {
        super("filter-item-template", hostId, false, "filter-chip-root");
        this.itemName = this.element.querySelector("#filter-item-name");
        this.itemIconSelected = this.element.querySelector("span");
        this.onSelect = onSelect;
        this.item = item;
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.setupComponents();
        this.element.addEventListener("click", (e) => {
            this.onSelect(this.item);
            this.setupComponents();
        });
    }
    setupComponents() {
        this.itemIconSelected.style.display = this.item.isSelected ? 'inline' : 'none';
        this.element.className = this.item.isSelected ? 'filter-item selected' : 'filter-item';
        this.itemName.textContent = this.item.name;
    }
}
//# sourceMappingURL=filter-chip.js.map