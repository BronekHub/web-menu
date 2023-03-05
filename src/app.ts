// Base component class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtBeginning: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtBeginning);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

class MenuListState {
  private static instance: MenuListState;
  private menuItems: MenuPositionModel[] = [];

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new MenuListState();
      return this.instance;
    }
  }

  updateMenuList(menuItems: MenuPositionModel[]) {
    this.menuItems = menuItems;
    
    const container = document.getElementById("menu-list-container")!;
    container.innerHTML = "";

    this.menuItems.forEach((item) => {
      new MenuPosition("menu-list-container", item);
    });
  }
}

enum MenuItemCategory {
  BREAKFAST,
  SWEET_BREAKFAST,
  BEVERAGE,
}

class FilterModel {
    constructor(
        public code: string,
        public name: string,
        public isSelected: boolean = false
    ) {}
}

class FoodAllergenModel {
  constructor(
    public code: string,
    public iconPath: string,
    public name: string
  ) {}
}

class MenuPositionModel {
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

const foodAllergensTypes = [
  new FoodAllergenModel(
    "vegetarian",
    "assets/alergy_icons/vegetarian.png",
    "Vegetarian"
  ),
  new FoodAllergenModel("vegan", "assets/alergy_icons/vegan.png", "Vegan"),
  new FoodAllergenModel("egg", "assets/alergy_icons/egg.png", "Egg"),
  new FoodAllergenModel("fish", "assets/alergy_icons/fish.png", "Fish"),
  new FoodAllergenModel("gluten", "assets/alergy_icons/gluten.png", "Gluten"),
  new FoodAllergenModel("gluten_free", "assets/alergy_icons/gluten_free.png", "Gluten free"),
  new FoodAllergenModel("milk", "assets/alergy_icons/milk.png", "Milk"),
];

const filterItems = foodAllergensTypes.map((allergen) => { return new FilterModel(allergen.code, allergen.name, false); })

const allMenuItems = [
  new MenuPositionModel(
    "scrambled_eggs",
    "SCRAMBLED EGGS",
    "3 free range eggs scrambled, served with bread, butter and fesh veggies",
    42,
    ["vegetarian", "egg", "gluten"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/scrambled_eggs.png"
  ),
  new MenuPositionModel(
    "omelette",
    "OMELETTE",
    "Omelette from 3 free range eggs with 2 filings of your choice (BACON, HAM, MUSHROOMS, SPINACH OR CHEESE) served with bread",
    18,
    ["vegetarian", "egg", "gluten"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/omelette.png"
  ),
  new MenuPositionModel(
    "smoked_salmon",
    "SMOKED SALMON ON TOAST",
    "Sourdough toast with cream cheese, smoked salmon, raddishes and fresh dill",
    22,
    ["fish", "gluten", "milk"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/smoked_salmon.png"
  ),
  new MenuPositionModel(
    "tofu_scramble",
    "TOFU SCRAMBLE",
    "Scrambled tofu, fresh veggies",
    19,
    ["vegan", "vegetarian", "gluten_free"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/tofu_scramble.png"
  ),
  new MenuPositionModel(
    "french_toast_strawberry puree",
    "FRENCH TOAST WITH STRAWBERRY PUREE",
    "Challah french toast with cinnamon and strawberry puree",
    17,
    ["vegetarian", "gluten"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/french_toast_strawberries.png"
  ),
  new MenuPositionModel(
    "french_toast_apples",
    "FRENCH TOAST WITH APPLES",
    "Challah french toast with cinnamon, sauteed apples, mascarpone and homemade caramel sauce",
    17,
    ["vegetarian", "gluten"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/french_toast_apples.png"
  ),
];

class SearchInput extends Component<HTMLDivElement, HTMLFormElement> {
  private searchInputElement: HTMLInputElement;
  private onUpdateValueListener: (value: string) => void;

  constructor(onUpdateValueListener: (value: string) => void) {
    super("search-input-template", "menu-container", true, "search-input-root");
    this.searchInputElement = this.element.querySelector(
      "#search-input"
    )! as HTMLInputElement;
    this.configure();
    this.onUpdateValueListener = onUpdateValueListener;
  }

  configure(): void {
    this.searchInputElement.addEventListener("change", (event) => {
      const input = event.target as HTMLInputElement;
      const value = input.value;
      this.onUpdateValueListener(value);
    });
  }

  renderContent() {}

  getCurrentValue(): string {
    return this.searchInputElement.value;
    }
}

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
  private item: MenuPositionModel;

  constructor(hostId: string, position: MenuPositionModel) {
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

function generateNewMenuList(searchValue: string): MenuPositionModel[] {
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
let filterView = new Filter(() => {
    menuListState.updateMenuList(generateNewMenuList(input.getCurrentValue()));
});

const input = new SearchInput((value) => {
  menuListState.updateMenuList(generateNewMenuList(value));
});


window.onresize = () => {
  menuListState.updateMenuList(generateNewMenuList(input.getCurrentValue()));
};

menuListState.updateMenuList(generateNewMenuList(input.getCurrentValue()));
