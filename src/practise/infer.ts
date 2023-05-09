
type Type<T> = T extends Array<any> ? T[number] : T
// 如果傳入的type 有符合泛型約束：等於array類型的話，就回傳T陣列中的元素類型。
// 如果沒有符合的話，就直接回傳原類型

type UseType<T> = T extends Array<infer U> ? U: T
// 在這裡，U不代表類型，是變數
// infer會去讀 array 裡面的類型，返回到 U 上面，藉此就可以直接返回 U 類型，就是陣列裡面的類型集合

type D = UseType<Array<string>>
type M = UseType<Array<number | string | boolean>>

type TupleToUni<T> = T extends Array<infer U>? U : never

const array = ['a', 1]

type Go = TupleToUni<typeof array>

// infer 可以用來提取指定位置的元素
// 提取元組類型的頭部元素，下面的示範只提取了元組陣列的第一個類型，其他使用了展開操作符忽略
type GetFirst<T extends any[]> = T extends [infer First, ...any[]]? First : []
// 如果不使用...any[]的話，就會限制傳入的陣列只能有一個元素，所以都將返回空陣列，使用...any[]的方法才能傳入不特定長度的陣列

type GetLast<T extends any[]> = T extends [...any[], infer Last]? Last : []

type Arr = [true, 'b', 'c', 'd' ,1]

// 可以透過展開操作符來一同使用infer
type ShiftArr<T extends any[]> = T extends [unknown, ...infer U]? U:[]
type PopArr<T extends any[]> = T extends [unknown, ...infer U]? U:[]

type ArrFirst = GetFirst<Arr>
type ArrLast = PopArr<Arr>

// infer 遞迴
type RevereArr<T extends any[]> = T extends [infer First, ...infer rest]? [...RevereArr<rest>, First] : T
type ArrRevere = RevereArr<Arr>

// 用於提取類型 
type ReturnTypes<T> = T extends (...args: any[]) => infer R ? R : any;
