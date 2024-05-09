import "reflect-metadata";

// 類裝飾器
function ClassDecorator<T extends new(...args:any[]) =>{}>(
  constructor: T
): T {
  return class extends constructor {
      newProperty = "New property";
      hello = "Override";
  }
}

// 方法裝飾器
function MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
      console.log(`Method ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
  }
}

@ClassDecorator
class ExampleClass {
  newProperty?: string; // 使用裝飾器時如果新增參數要先宣告，nest.js 裡面已經幫我們處理好這些東西，通常是使用裝飾器工廠
  property = "Property";
  hello: string;

  constructor(m: string) {
      this.hello = m;
  }

  @MethodDecorator
  method(arg: string) {
      console.log(this.hello + " " + arg);
  }
}

const example = new ExampleClass("Hello");
console.log(example.newProperty);
example.method("world");

// 裝飾器工廠
function Log(label: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function(...args: any[]) {
          console.log(`[${label}] Calling ${key} with arguments:`, args);
          const result = originalMethod.apply(this, args);
          console.log(`[${label}] Returned from ${key} with result:`, result);
          return result;
      };
      return descriptor;
  };
}

class MyService {
  @Log("DEBUG")
  sayHello(name: string) {
      return `Hello, ${name}!`;
  }
}

const service = new MyService();
console.log(service.sayHello("World"));


// 裝飾器工廠，接受一個布爾值參數來決定屬性是否可序列化
function Serializable(isSerializable: boolean) {
  return function(target: any, propertyKey: string) {
      Reflect.defineMetadata("isSerializable", isSerializable, target, propertyKey);
  };
}

// 使用反射元數據系統（需要安裝 reflect-metadata 庫）
import "reflect-metadata";

// 屬性裝飾器
class User {
  @Serializable(true)
  public name: string;

  @Serializable(false)
  public password: string;

  constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
  }
}

// 函數用於序列化對象，僅包含可序列化的屬性
function serialize(object: any): string {
  let result: any = {};
  for (let key in object) {
      if (Reflect.getMetadata("isSerializable", object, key)) {
          result[key] = object[key];
      }
  }
  return JSON.stringify(result);
}

let user = new User("John Doe", "12345");
console.log(serialize(user)); // 輸出: {"name":"John Doe"}


// 建立一個全局映射來存儲參數資訊
const methodParamsStorage: Map<string, number[]> = new Map();

// 參數裝飾器
function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    const className = target.constructor.name;
    const key = `${className}.${propertyKey}`;
    if (methodParamsStorage.has(key)) {
        methodParamsStorage.get(key)!.push(parameterIndex);
    } else {
        methodParamsStorage.set(key, [parameterIndex]);
    }
}

class Calculator {
    // 使用裝飾器裝飾方法參數
    add(@LogParameter a: number, @LogParameter b: number): number {
        console.log(`Adding ${a} + ${b}`);
        return a + b;
    }
}

// 函數用於在方法調用時日誌記錄參數
function applyLogging(targetClass: any) {
    Object.getOwnPropertyNames(targetClass.prototype).forEach(method => {
        const originalMethod = targetClass.prototype[method];
        if (typeof originalMethod === 'function') {
            targetClass.prototype[method] = function(...args: any[]) {
                const className = this.constructor.name;
                const key = `${className}.${method}`;
                const indices = methodParamsStorage.get(key);
                if (indices) {
                    indices.forEach(index => {
                        console.log(`Method ${method} called with param at index ${index}: ${args[index]}`);
                    });
                }
                return originalMethod.apply(this, args);
            };
        }
    });
}

// 應用日誌記錄
applyLogging(Calculator);

const calc = new Calculator();
calc.add(5, 10);