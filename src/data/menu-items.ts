import { MenuItemModel, MenuItemCategory } from "../models/menu-item.js";

export const menuItems = [
  new MenuItemModel(
    "bbq_club_sandwich",
    "BBQ CLUB SANDWICH",
    "Grilled chicken, fied egg, tomato, cheese % sause ",
    34,
    ["fried", "gluten", "egg"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/bbq_club.png"
  ),
  new MenuItemModel(
    "fried_rice",
    "FRIED RICE",
    "Fried rice with eggs, vegetables, and bacon or sausage",
    24,
    ["fried", "pork", "gluten", "egg"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/fried_eggs.png"
  ),
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
    "bagels",
    "BAGELS",
    "Bagel with cream cheese, smoked salmon, and capers",
    20,
    ["vegetarian", "gluten", "fish"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/bagels.png"
  ),
  new MenuItemModel(
    "english_breakfast",
    "ENGLISH BREAKFAST",
    "Bacon, breakfast sausage, fried egg, hash brown, baked breans, tomate, mushrooms toast",
    32,
    ["fried", "pork", "gluten", "egg"],
    MenuItemCategory.BREAKFAST,
    "./assets/food_images/english_breakfast.png"
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
    MenuItemCategory.SWEET_BREAKFAST,
    "./assets/food_images/french_toast_strawberries.png"
  ),
  new MenuItemModel(
    "pancakes",
    "PANCAKES",
    "Pancakes with maple syrup and butter",
    24,
    ["egg", "gluten_free"],
    MenuItemCategory.SWEET_BREAKFAST,
    "./assets/food_images/pancakes.png"
  ),
  new MenuItemModel(
    "american_pancakes",
    "AMERICAN PANCAKES",
    "4 pancakes with choice of nutella and bananas or warm rasberries, banana and mapie syrup",
    24,
    ["egg", "gluten", "tree_nuts"],
    MenuItemCategory.SWEET_BREAKFAST,
    "./assets/food_images/american_pancakes.png"
  ),
  new MenuItemModel(
    "french_toast_apples",
    "FRENCH TOAST WITH APPLES",
    "Challah french toast with cinnamon, sauteed apples, mascarpone and homemade caramel sauce",
    17,
    ["vegetarian", "gluten"],
    MenuItemCategory.SWEET_BREAKFAST,
    "./assets/food_images/french_toast_apples.png"
  ),
  new MenuItemModel(
    "granola",
    "GRANOLA",
    "Served with yoghurt and fresh fruit",
    17,
    ["vegetarian", "gluten", "tree_nuts", "milk"],
    MenuItemCategory.SWEET_BREAKFAST,
    "./assets/food_images/granola.png"
  ),
  new MenuItemModel(
    "pudding_chia",
    "PUDDING CHIA",
    "Chia seeds with coconut milk, mango, puree and fresh fruit",
    17,
    ["vegan", "vegetarian", "gluten", "milk"],
    MenuItemCategory.SWEET_BREAKFAST
  ),
  new MenuItemModel(
    "cocktail",
    "COCKTAIL",
    "Carrot & apple / Orange & Raspberry",
    9,
    [],
    MenuItemCategory.BEVERAGE
  ),
  new MenuItemModel(
    "cappucino",
    "CAPPUCINO",
    "",
    11,
    ["milk", "tree_nuts"],
    MenuItemCategory.BEVERAGE,
    "./assets/food_images/cappucino.png"
  ),
  new MenuItemModel(
    "latte",
    "LATTE",
    "",
    9,
    ["milk", "tree_nuts"],
    MenuItemCategory.BEVERAGE,
    "./assets/food_images/latte.png"
  ),
  new MenuItemModel(
    "flat_white",
    "FLAT WHITE",
    "",
    10,
    ["milk", "tree_nuts"],
    MenuItemCategory.BEVERAGE,
    "./assets/food_images/flat_white.png"
  ),
  new MenuItemModel(
    "mocha",
    "MOCHA",
    "",
    12,
    ["milk", "tree_nuts"],
    MenuItemCategory.BEVERAGE,
    "./assets/food_images/mocha.png"
  ),
  new MenuItemModel(
    "tea",
    "TEA",
    "Black tea / herbal tea",
    8,
    [],
    MenuItemCategory.BEVERAGE,
    "./assets/food_images/tea.png"
  ),
];
