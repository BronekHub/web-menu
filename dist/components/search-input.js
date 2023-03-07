import { Component } from "../models/component.js";
export class SearchInput extends Component {
    constructor(onUpdateValueListener) {
        super("search-input-template", "app", true, "search-input-root");
        this.searchInputElement = this.element.querySelector("#search-input");
        this.configure();
        this.onUpdateValueListener = onUpdateValueListener;
    }
    configure() {
        this.element.addEventListener('submit', (event) => {
            event.preventDefault();
            const value = this.searchInputElement.value;
            this.onUpdateValueListener(value);
        });
    }
    renderContent() { }
    getCurrentValue() {
        return this.searchInputElement.value;
    }
}
//# sourceMappingURL=search-input.js.map