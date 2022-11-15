//定義型別，可以用 ： 來定義
const aaa: string = 'myName';
const number: number = 1;

//定義陣列類型，可以使用形態加陣列[]來定義
const stringArr: string[] = ['2', '2', '2', '3'];
const numberArr: number[] = [1, 2, 3, 5];

//或是使用陣列泛型來定義Array<形態>
const stringArr2: Array<number> = [2, 6, 7, 3];

// 枚舉 enum ， 類似物件建構子
enum LiveState {
    SUCCESS = 0,
    FAIL = -1,
    STE = 1,
}

const state = LiveState.SUCCESS;
//console.log(state);

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
