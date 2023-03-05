import { FoodAllergenModel } from "../models/food-allergen.js";

export const foodAllergensTypes = [
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
  