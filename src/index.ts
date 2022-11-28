//定義型別，可以用 ： 來定義
const aaa: string = 'myName';
const number: number = 1;

//定義陣列類型，可以使用形態加陣列[]來定義
const stringArr: string[] = ['2', '2', '2', '3'];
const numberArr: number[] = [1, 2, 3, 5];

//一般使用interface來描述Array，這裡表示：只要索引類型是數字時，那麼值的類型必須是數字
interface NumberArray {
    [index: number]: number;
}
const fibonacci: NumberArray = [1, 2, 3];

//使用interface定義型別的話，檢查陣列裡面是否為“陣列”、或是“物件”，用下面的方法，只要索引值是數字時，那麼值的類型必須是Array
interface ObjArray {
    [index: number]: number[];
}
const objArray: ObjArray = [[1, 2]];

// 枚舉 enum ， 類似物件建構子，不同的是賦值是使用等於
enum LiveState {
    SUCCESS = 0,
    FAIL = -1,
    STE = 1,
}
const state = LiveState.SUCCESS;

enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}
const c: Color = Color.Green;
console.log(c);

//Union 可以宣告多種不同的型別
let eee: number | string;
eee = 1000;
eee = 'mon';

// type關鍵字 ， 事先宣告型在變數中，以利後續的提取
//跟interface最大的不同是後者可以進行擴充
// type必須寫等於
type A = number | string;
let a1: A;
a1 = 999;
a1 = 'srt';

// 宣告一個obj裡面必須包含神魔樣的參數，及參數裡面分別是什麼型態
type OBJ = {
    name: string;
    desc: string;
};

const thisIsObj: OBJ = {
    name: 'jjjj',
    desc: 'iiii',
};

//interface 一樣是宣告類類型的一個方法，這裡面是可以擴充的

interface Card {
    name: string;
    desc: string;
}

interface Card {
    age?: number; //加上問號會變成一個可選的類型
} //在這邊進行擴充

const obj: Card = {
    name: 'bibi',
    desc: 'token',
};

// function
function hollo(a: string, b: string) {
    //透過宣告類型可以清楚的知道傳次參數的類型是什麼
    return a + b;
}

function hollo2(a: string, b: string): string {
    return a + b;
}

function alertName(): void {
    console.log('object');
}

//類型斷言
interface AB {
    run: string;
}

interface BB {
    build: string;
}

//此斷言可以先指定type為AB，意指type是AB的話，就可以使用.run的屬性，但這邊傳入的如果是BB的話，就會壞掉
const fn = (type: AB | BB): string => {
    return (type as AB).run;
};

//as const 與直接使用const來宣告是有差的，比const還要嚴格
const arr = [10, 20] as const;
const arr2 = [10, 20];
//這邊使用了as const進行斷言的話，就沒辦法對arr陣列進行任何操作，push\pop之類的都不行，會變成readonly屬性
