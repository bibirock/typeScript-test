// 三斜線指令是包含單個XML標籤的單行註釋。註釋的內容會做為編譯器指令使用。
/// <reference types="node" />
// 可以用於導入類型聲明文件，指的是導入d.ts 文件，如果沒寫d.ts文件的話就會找不到而報錯了。
// 但是，在大多數情況下，當使用模組導入時，TypeScript 會自動查找和加載類型聲明，因此你不需要手動添加 reference types 指令。
/// <reference path="index.ts" />
// 等於 import "./index.ts"
// 可以導入檔案，但建議還是使用import 來進行導入與導出
/// <reference lib="dom" />
// 用於引用 TypeScript 內置的標準庫聲明文件。
