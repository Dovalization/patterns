import { IMealComposite } from "./IMealComposite";

class Meal implements IMealComposite {
  private readonly items: IMealComposite[] = [];

  getPrice(): number {
    const grandTotal = this.items.reduce(
      (acc, item) => acc + item.getPrice(),
      0
    );
    return grandTotal;
  }

  addItems(...items: IMealComposite[]): void {
    items.forEach((item) => this.items.push(item));
  }

  getItems(): IMealComposite[] {
    const items = this.items.slice();
    return items;
  }
}

export { Meal };
