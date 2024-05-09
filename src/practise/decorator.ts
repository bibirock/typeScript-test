/*
 * @Author: Joe.Chen
 * @Date: 2024-05-09 11:36:27
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2024-05-09 11:39:58
 * @Description: 
 */
import axios from "axios";
import "reflect-metadata";
// 類裝飾器
// target 將返回 Http的構造函數constructor
// 裝飾式可以不修改的情況下來增加class的屬性
const Base: ClassDecorator = (target) => {
  target.prototype.a = "b";
  target.prototype.fn = () => {
    console.log("I am new function");
  };
};

// 裝飾器工廠，使用柯里化函式的方法來帶入參數。
function BaseClass(name: string) {
  const fn: ClassDecorator = (target) => {
    // 類裝飾器推薦使用匿名函式放入變數中，在對其類型進在定義賦值。
    target.prototype.a = name;
    target.prototype.fn = () => {
      // console.log("I am new function");
    };
  };
  return fn;
}

interface Base {
  a: string;
  fn: () => void;
}

const Get = (url: string) => {
  // 裝飾器工廠
  const fn: MethodDecorator = (
    target,
    _: any,
    descriptor: PropertyDescriptor
  ) => {
    const key = Reflect.getMetadata("key", target);
    axios.get(url).then((res) => {
      descriptor.value(key ? res.data[key][0] : res.data); // 這裡如果拿到值的話，就會去拿"results"中的[0]
    });
  };
  return fn;
};

const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata("key", "results", target); // 這裡的results為真實要取得值的鍵值
  };
  return fn;
};

