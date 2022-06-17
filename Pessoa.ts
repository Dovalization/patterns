export class Pessoa {
  constructor(
    private nome: string,
    public sobreNome: string,
    protected idade: number
  ) {}

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }
}
