import { FoodAllergenModel } from "../models/food-allergen.js";

export const foodAllergensTypes = [
    new FoodAllergenModel("vegetarian","resources/alergy_icons/vegetarian.png","Vegetarian"),
    new FoodAllergenModel("vegan", "resources/alergy_icons/vegan.png", "Vegan"),
    new FoodAllergenModel("egg", "resources/alergy_icons/egg.png", "Egg"),
    new FoodAllergenModel("fish", "resources/alergy_icons/fish.png", "Fish"),
    new FoodAllergenModel("fried", "resources/alergy_icons/fried.png", "Fried"),
    new FoodAllergenModel("gluten", "resources/alergy_icons/gluten.png", "Gluten"),
    new FoodAllergenModel("gluten_free", "resources/alergy_icons/gluten_free.png", "Gluten free"),
    new FoodAllergenModel("milk", "resources/alergy_icons/milk.png", "Milk"),
    new FoodAllergenModel("peanuts", "resources/alergy_icons/peanuts.png", "Peanuts"),
    new FoodAllergenModel("pork", "resources/alergy_icons/pork.png", "Pork"),
    new FoodAllergenModel("tree_nuts", "resources/alergy_icons/nuts.png", "Tree nuts"),
  ];
  