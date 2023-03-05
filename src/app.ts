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
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;
        
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as U;

        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtBeginning);
    }

    private attach(insertAtBeginning: boolean) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }

    abstract configure(): void;
    abstract renderContent(): void;
}

class FoodAllergens {
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
        public imagePath?: string,
    ) {}
}

const foodAllergensTypes = [
    new FoodAllergens("egg", "assets/alergy_icons/gluten.png", "Egg")
];

const menuPositions = [
    new MenuPositionModel("scrambled_eggs", "SCRAMBLED EGGS", "3 free range eggs scrambled, served with bread, butter and fesh veggies", 12, [
        "egg"
    ], "./assets/food_images/scrambled_eggs.png"),
    new MenuPositionModel("scrambled_eggs2", "SCRAMBLED EGGS", "3 free range eggs scrambled, served with bread, butter and fesh veggies", 12, [
        "egg"
    ], "./assets/food_images/scrambled_eggs.png")
];

class SearchInput extends Component<HTMLDivElement, HTMLFormElement> {
    searchInputElement: HTMLInputElement;

    constructor() {
        super('search-input-template', 'menu-container', true, 'search-input-root');
        this.searchInputElement = this.element.querySelector('#search-input')! as HTMLInputElement;
        this.configure();
    }

    configure(): void {
        this.searchInputElement.addEventListener("change", (event) => {
            const input = event.target as HTMLInputElement;
            const value = input.value;
            console.log(`The value of the input element has changed to: ${value}`);
          });
    }
    renderContent() {
    }
}

class MenuPosition extends Component<HTMLDivElement, HTMLDivElement> {
    
    private item: MenuPositionModel

    constructor(hostId: string, position: MenuPositionModel) {
        super("menu-position-template", hostId, false, position.id)
        this.item = position; 
        this.renderContent();
    }

    configure(): void {
   
    }

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
            img.className = "alergy-icon"
            img.src = allergen!.iconPath;

            allergenList.appendChild(img);
        })


    }
}

function convertToCurrency(price: number): string {
    return price.toLocaleString("en-US", { style: 'currency', currency: 'PLN' });
}


const input = new SearchInput();

menuPositions.forEach((item) => {
    new MenuPosition("menu-list-container", item);
})

