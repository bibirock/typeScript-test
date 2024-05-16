/*
 * @Author: Joe.Chen
 * @Date: 2024-05-16 17:24:39
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2024-05-16 17:44:56
 * @Description: 
 */

import axios from "axios"

// 使用裝飾器工廠 實現 axios-get 方法裝飾器
function Get (
  url: string
): MethodDecorator {
  return (
    target,
    key,
    desc: PropertyDescriptor
  ) => {
    // 透過 fnc 可以將結果回傳給呼叫方法裝飾器的參數中
    const fnc = desc.value
    axios.get(url).then(res => {
      // 放回呼叫方法的參數中
      fnc(res, { status: 200 })
    })
  }
}

class Controller {

  @Get('https://randomuser.me/api/')
  getList( // 裝飾器會回傳幾個數值這邊就要接幾個
    res: any,
    status: any
  ) {
    console.log(res.data.results, status);
  }
}

const test = new Controller()
test.getList