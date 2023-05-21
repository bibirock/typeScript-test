/*
 * @Author: Joe.Chen joechen@tracle-tw.com
 * @Date: 2023-05-09 14:49:22
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-05-21 15:49:16
 * @FilePath: /typeScript-test/src/practise/typeGuards.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface AAA {
    name: string
}

interface BBB {
    type: number
}

function upGo (p: AAA | BBB): void {
    if("name" in p) {
        // 在這個代碼塊中，TypeScript 知道 p 的類型是 AAA
        console.log("This is AAA:", p.name);
    } else if ("type" in p) {
        // 在這個代碼塊中，TypeScript 知道 p 的類型是 BBB
        console.log("This is BBB:", p.type);
    }
}

upGo({type: 111})

// 型別謂詞 is
// 這個謂詞可以用來判斷一個變數的類型是否是某個型別，這個謂詞只能用在 return type 是 boolean 的函式中
const TypeCheck = {
    isString (s: any): s is string { return (typeof s === 'string' || s instanceof String) },
    isNotString (s: any): boolean { return !TypeCheck.isString(s) },
}
