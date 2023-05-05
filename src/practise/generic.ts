const testObj = {
  name: "o",
  age: 0,
};

type Key = keyof typeof testObj; // 使用關鍵字 typeof 可以抽取自動堆導出的型別，配合 keyof 可以將物件內的 key 字串給抽取成聯集類型

/**
 * <T extends object, K extends keyof T> 意思為：第一個參數需為一個object類型， 第二個參數必須為 T 中的 key
 */
function getObjType<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

getObjType(testObj, "age"); // 使用時須滿足類型，因類型定義了，使用時也會有完整的類型推導功能

function fn123<T extends Array<number>>(a: T) {
  a.forEach((e) => {
    console.log(e);
  });
}

fn123([1, 2, 3, 4]);

interface Data {
  name: string;
  age: number;
  sex: string;
}

/**
 * 這邊使用了TypeScript中的映射類型，映射類型（Mapped Types）是
 * TypeScript 中一種用於創建新類型的功能。它可以基於現有類型遍歷其屬性，並對屬性進行變換以生成新的類型。
 * 映射類型使您能夠更靈活地操作和組合類型，從而提高代碼的可重用性和可維護性。
 */
type Options<T extends object> = {
  [key in keyof T]?: T[key]; //遍歷每個key 並且加上可選操作符"?" T[key] 的意思為object 中的每一個值
};

type B = Options<Data>;
