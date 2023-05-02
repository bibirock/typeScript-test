class Person {
  public name: string; // 允許進行外部調用，而不限於class本身
  private age: number; // 只能在宣告的class 中調用，為私有屬性
  protected some: any;
  static nb = "Hi Man"; // 不能透過this進行調用，只能在使用new 關鍵字時去進行取值
  constructor(name: string, age: number, some: any) {
    this.age = age;
    this.name = name;
    this.some = some;
  }

  static run() {
    // 如使用靜態函式或是方法，就可以互相使用this來調用靜態的方法與變數
    console.log("running");
    this.nb;
  }

  static as() {
    this.run();
  }
}

class Man extends Person {
  constructor() {
    super("Andy", 22, "s");
    console.log(this.name);
  }
}

// console.log(Person.nb); // 可以直接調用靜態方法

// 如何使用interface 來定義 class
interface PersonClass {
  get(type: boolean): boolean;
}

interface PersonClass2 {
  set(): void;
  asd: string;
}

class BB {
  name: string;
  constructor() {
    this.name = "123";
  }
}

// 使用關鍵字implements 來約束 NewPerson 的型別為PersonClass、PersonClass2
// 並且繼承了BB 這個類別，在constructor super 來實現父類別的方法
class NewPerson extends BB implements PersonClass, PersonClass2 {
  asd: string;
  constructor() {
    super();
    this.asd = "123";
  }

  get(type: boolean): boolean {
    return type;
  }

  set(): void {
    console.log("object");
  }
}
