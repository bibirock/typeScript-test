export namespace A {
  // namespace 可以理解為將空間給命名，讓檔案裡面的所有方法或變數宣告不會因為 import 而一口氣飛進全域裡面。
  // 可以使用export 來導出命名空間
  // 可以分出空間給方法使用，就不會造多檔案import 所造成的變數污染，讓程式變得更加安全
  export const a = 1; // 使用命名空間後，如果想要在外部取用命名空間內部的值，就必須使用export 進行對外暴露
  export namespace B {
    // 命名空間可在崁套使用。
    export const s = 2;
  }
}

export namespace A {
  // 如果命名空間有重疊，則內部的東西會進行累加，跟interface 的觀念是一樣的
  export const n = 1; // 使用命名空間後，如果想要在外部取用命名空間內部的值，就必須使用export 進行對外暴露
}
