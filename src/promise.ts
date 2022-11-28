//定義promise物件回傳的型別，如果沒有定義的話，將會無法自動堆導

function promise(): Promise<number> {
    return new Promise<number>((resolve) => {
        resolve(1);
    });
}

promise().then((res) => console.log(res));
