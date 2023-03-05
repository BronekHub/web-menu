import { MenuItemModel, MenuItemCategory } from "../models/menu-item.js";

export const allMenuItems = [
    new MenuItemModel(
      "scrambled_eggs",
      "SCRAMBLED EGGS",
      "3 free range eggs scrambled, served with bread, butter and fesh veggies",
      42,
      ["vegetarian", "egg", "gluten"],
      MenuItemCategory.BREAKFAST,
      "./assets/food_images/scrambled_eggs.png"
    ),
    new MenuItemModel(
      "omelette",
      "OMELETTE",
      "Omelette from 3 free range eggs with 2 filings of your choice (BACON, HAM, MUSHROOMS, SPINACH OR CHEESE) served with bread",
      18,
      ["vegetarian", "egg", "gluten"],
      MenuItemCategory.BREAKFAST,
      "./assets/food_images/omelette.png"
    ),
    new MenuItemModel(
      "smoked_salmon",
      "SMOKED SALMON ON TOAST",
      "Sourdough toast with cream cheese, smoked salmon, raddishes and fresh dill",
      22,
      ["fish", "gluten", "milk"],
      MenuItemCategory.BREAKFAST,
      "./assets/food_images/smoked_salmon.png"
    ),
    new MenuItemModel(
      "tofu_scramble",
      "TOFU SCRAMBLE",
      "Scrambled tofu, fresh veggies",
      19,
      ["vegan", "vegetarian", "gluten_free"],
      MenuItemCategory.BREAKFAST,
      "./assets/food_images/tofu_scramble.png"
    ),
    new MenuItemModel(
      "french_toast_strawberry puree",
      "FRENCH TOAST WITH STRAWBERRY PUREE",
      "Challah french toast with cinnamon and strawberry puree",
      17,
      ["vegetarian", "gluten"],
      MenuItemCategory.BREAKFAST,
      "./assets/food_images/french_toast_strawberries.png"
    ),
    new MenuItemModel(
      "french_toast_apples",
      "FRENCH TOAST WITH APPLES",
      "Challah french toast with cinnamon, sauteed apples, mascarpone and homemade caramel sauce",
      17,
      ["vegetarian", "gluten"],
      MenuItemCategory.BREAKFAST,
      "./assets/food_images/french_toast_apples.png"
    ),
  ];
  