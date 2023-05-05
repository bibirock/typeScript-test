// 必須在檔案名稱聲明要為了誰來編寫聲明文件，例如本檔案是為了 express 來擴充邊編寫的，檔名必須為xxx.d.ts
declare module "express" {
  // 但其實是透過這個 module 名稱來進行宣告擴充的
  interface Express {
    (): App; // 讓該函式可以被呼叫，並且讓其指向App這個interface 來實作介面方法
    Router(): Router; // express.Router() 透過此方法可以呼叫此介面實現的Router()
  }

  interface Router {
    get(path: string, cb: (req: any, res: any) => void): void;
  }

  interface App {
    use(path: string, router: any): void;
    listen(port: number, cb?: () => void);
  }

  const express: Express;

  export default express; // 導出聲明模組
}

// 可以聲明任何東西，例如命名空間

declare var a: number; // 透過此方法可以宣告全域變數，在任何檔案中可以讀取到，也可以透過declare let 來進行聲明

declare function xxx(params: type) {};

declare class Vue {}

declare enum C {
  a = 1,
}
