/*
 * @Author: Joe.Chen joechen@tracle-tw.com
 * @Date: 2023-05-21 15:52:33
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-05-21 15:55:53
 * @FilePath: /typeScript-test/src/practise/utilityTypes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 1. Record<K,T>
 * 在 TypeScript 中，Record 是一種工具類型，用來創建一種映射類型
 */
enum Direction {
  Up,
  Down,
  Left,
  Right
}

type DirectionMapping = Record<Direction, string>;

let directionMapping: DirectionMapping = {
  [Direction.Up]: "Go up",
  [Direction.Down]: "Go down",
  [Direction.Left]: "Go left",
  [Direction.Right]: "Go right"
};
// 上述用法簡介: 在這個例子中，我們使用了一個枚舉型別作為 Record 的鍵。這表示 DirectionMapping 物件需要包含所有方向的映射。