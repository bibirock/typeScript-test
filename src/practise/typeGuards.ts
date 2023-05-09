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

upGo({name: 'joe'})