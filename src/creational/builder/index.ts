// Usage

import {
  Beans,
  Beverage,
  Broccoli,
  Chicken,
  Dessert,
  Rice,
  Tomatoes,
} from "./Items";
import { MealBuilder } from "./MealBuilder";

const mealBuilder = new MealBuilder();

const pantry = {
  rice: new Rice("Basmati Rice", 1.5),
  beans: new Beans("Kidney Beans", 1.0),
  brocolli: new Broccoli("Organic Broccoli", 1.0),
  chicken: new Chicken("Rotisserie Chicken", 1.5),
  tomatoes: new Tomatoes("Organic Tomatoes", 1.0),
  sparklingWater: new Beverage("Fiji Water", 1.0),
  coffee: new Beverage("Expresso Coffee", 0.5),
  acai: new Dessert("Açaí Bowl", 1.0),
};

function createOrder() {
  const {
    acai,
    beans,
    brocolli,
    chicken,
    coffee,
    rice,
    sparklingWater,
    tomatoes,
  } = pantry;

  const dishes = [rice, beans, brocolli, chicken, tomatoes];
  const beverages = [sparklingWater, coffee];
  const desserts = [acai];

  const createdMeal = mealBuilder
    .createMeal(dishes)
    .createBeverage(beverages)
    .createDessert(desserts)
    .getMeal();

  const grandTotal = createdMeal.getPrice();

  console.log(`This is your order summary:`);
  console.table(createdMeal.getItems(), ["name", "price"]);
  console.log(`Grand Total: ${grandTotal}`);

  return createdMeal;
}

console.log("\n\n\n\n");
createOrder();
