import { StorageCls, Key, Expire, Data } from "./type/index";
import { Dictionaries } from "./enum/index";

export class Storage implements StorageCls {
  get<T>(key: Key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getDate();
      if (typeof data.__expire__ === "number" && data.__expire__ < now) {
        this.remove(key);
        return {
          message: `您的${key}已過期`,
          value: null,
        };
      } else {
        return {
          message: "成功",
          value: data.value,
        };
      }
    } else {
      return {
        message: "值無效",
        value: null,
      };
    }
  }

  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value, // 用戶的value
      [Dictionaries.expire]: expire, //存過期時間
    };

    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: Key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
