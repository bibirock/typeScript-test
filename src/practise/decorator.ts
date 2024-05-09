
// 類裝飾器
function ClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
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
console.log(example.property); // 'New property'
example.method("world"); // Logs 'Method method called with arguments: ["world"]' then 'Hello world'