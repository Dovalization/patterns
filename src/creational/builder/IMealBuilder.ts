import { IMealComposite } from "./IMealComposite";

interface IMealBuilder {
  createMeal([]: IMealComposite[]): this;
  createBeverage([]: IMealComposite[]): this;
  createDessert([]: IMealComposite[]): this;
}

export { IMealBuilder };
