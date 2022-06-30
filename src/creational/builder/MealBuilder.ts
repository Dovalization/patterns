import { IMealBuilder } from "./IMealBuilder";
import { IMealComposite } from "./IMealComposite";
import { Meal } from "./Meal";

class MealBuilder implements IMealBuilder {
  private meal: Meal = new Meal();
  reset(): this {
    this.meal = new Meal();
    return this;
  }

  createMeal(items: IMealComposite[]): this {
    this.meal.addItems(...items);
    return this;
  }
  createBeverage(items: IMealComposite[]): this {
    this.meal.addItems(...items);
    return this;
  }
  createDessert(items: IMealComposite[]): this {
    this.meal.addItems(...items);
    return this;
  }

  getMeal(): Meal {
    return this.meal;
  }
}

export { MealBuilder };
