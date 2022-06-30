import { IMealComposite } from "./IMealComposite";

abstract class AbstractMeal implements IMealComposite {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}

export { AbstractMeal };
