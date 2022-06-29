export class Person {
  constructor(
    private name: string,
    public surname: string,
    protected age: number
  ) {}

  public getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  public setName(nome: string): void {
    this.name = nome;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(idade: number): void {
    this.age = idade;
  }
}
