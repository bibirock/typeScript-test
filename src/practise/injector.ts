/*
 * @Author: Joe.Chen
 * @Date: 2024-05-09 11:41:43
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2024-05-09 11:41:44
 * @Description: 
 */


class UserService {
  getUsers(): string[] {
    return ['Alice', 'Bob', 'Charlie'];
  }
}

class Injector {
  private static container = new Map<string, any>()

  static register<T>(
    token: string,
    instance: T
  ) {
    Injector.container.set(token, instance)
  }

  static resolve<T>(
    token: string
  ): T {
    const instance = Injector.container.get(token)
    return instance
  }
}

Injector.register<UserService>('UserService', new UserService());

class UserComponent {
  private userService: UserService;

  constructor() {
    this.userService = Injector.resolve<UserService>('UserService');
  }

  render() {
    const users = this.userService.getUsers();
    console.log('Rendering users:', users);
  }
}