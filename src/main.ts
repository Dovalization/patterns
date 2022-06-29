import { MyDatabaseClassic } from "./creational/singleton/db/my-database-classic";

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();

console.log(db1 === db2); // true
console.log("Hello");
