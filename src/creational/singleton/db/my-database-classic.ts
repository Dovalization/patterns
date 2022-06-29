class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }
}

export { MyDatabaseClassic };
