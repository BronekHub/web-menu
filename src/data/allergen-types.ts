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
    new FoodAllergenModel("fried", "assets/alergy_icons/fried.png", "Fried"),
    new FoodAllergenModel("gluten", "assets/alergy_icons/gluten.png", "Gluten"),
    new FoodAllergenModel("gluten_free", "assets/alergy_icons/gluten_free.png", "Gluten free"),
    new FoodAllergenModel("milk", "assets/alergy_icons/milk.png", "Milk"),
    new FoodAllergenModel("peanuts", "assets/alergy_icons/peanuts.png", "Peanuts"),
    new FoodAllergenModel("pork", "assets/alergy_icons/pork.png", "Pork"),
    new FoodAllergenModel("tree_nuts", "assets/alergy_icons/nuts.png", "Tree nuts"),
  ];
  