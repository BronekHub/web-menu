import { Component } from "../models/component.js";

export class SearchInput extends Component<HTMLDivElement, HTMLFormElement> {
    private searchInputElement: HTMLInputElement;
    private onUpdateValueListener: (value: string) => void;
  
    constructor(onUpdateValueListener: (value: string) => void) {
      super("search-input-template", "app", true, "search-input-root");

      this.searchInputElement = this.element.querySelector("#search-input")! as HTMLInputElement;
      this.configure();
      this.onUpdateValueListener = onUpdateValueListener;
    }
  
    configure(): void {
      this.element.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        const value = this.searchInputElement.value;
        this.onUpdateValueListener(value);
      });
    }
  
    renderContent() {}
  
    getCurrentValue(): string {
      return this.searchInputElement.value;
    }
  }